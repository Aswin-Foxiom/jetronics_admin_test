// ErrorBoundary.js
import React, { Component } from "react";
import ErrorPage from "../pages/specialPages/ErrorPage";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    console.error("Error caught by Error Boundary:", error, info);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render the error page or message here
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
