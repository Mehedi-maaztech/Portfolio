import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so next render shows fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can log the error to an error reporting service
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-center p-6">
                    <h2>Something went wrong</h2>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;