import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import { OfflineAlert } from "./Alert";
import moment from "moment";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class App extends Component {
  componentDidMount() {
    getEvents().then((response) => {
      this.setState({ events: response.events, locations: response.locations });
    });
    window.addEventListener("online", this.offLineAlert());
  }

  state = {
    events: [],
    page: null,
    currentLocation: "all",
    offlineText: "",
    numberOfEvents: 32,
    locations: [],
  };

  offLineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        offlineText:
          "You appear to be offline, this list is cached. Please connect to the internet for an updated list.",
      });
    } else {
      this.setState({
        offlineText: "",
      });
    }
  };

  countEventsOnADate = (date) => {
    // This should always return 0 untill we ensure the dates are the same format
    const count = this.state.events.filter(
      (event) => event.start.dateTime === date
    );
    return count.length;
  };

  getData = () => {
    const currentDate = moment().add(7, "d").format("YYYY-MM-DD HH:mm"); //next 7 days
    //{ date: dateString, number: count } format
    const next7Days = this.state.events.filter((event) => {
      const eventDate = moment(
        event.start.dateTime,
        "YYYY-MM-DD HH:mm"
      ).toDate();

      return eventDate <= currentDate;
    });
    console.log("next7Days", next7Days);
    return next7Days;
  };

  updateEvents = (location, numberOfEvents) => {
    const { currentLocation } = this.state;
    if (location) {
      getEvents(this.state.numberOfEvents).then((response) =>
        this.setState({
          events:
            location === "all"
              ? response.events
              : response.events.filter((event) => event.location === location),
          currentLocation: location,
        })
      );
    } else {
      getEvents(numberOfEvents).then((response) =>
        this.setState({
          events:
            currentLocation === "all"
              ? response.events
              : response.events.filter((event) => event.location === location),
          numberOfEvents: numberOfEvents,
        })
      );
    }
  };

  render() {
    const { locations, numberOfEvents, offlineText, events } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch updateEvents={this.updateEvents} locations={locations} />
        <OfflineAlert text={offlineText} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={numberOfEvents}
        />
        {/* <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="A school" data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer> */}
        <EventList events={events} />
      </div>
    );
  }
}

export default App;