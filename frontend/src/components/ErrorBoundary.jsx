import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Unhandled UI error:", error, info);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.assign("/");
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Something went wrong
          </h1>
          <p className="mt-2 text-gray-600">
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={this.handleReload}
            className="mt-6 rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
