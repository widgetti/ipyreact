import React from "react";

export
class ErrorBoundary extends React.Component {
    constructor(props : any) {
      super(props);
      this.state = { hasError: false, error: null };
    }
  
    static getDerivedStateFromError(error: any) {
      return { hasError: true, error };
    }
  
    componentDidCatch(error: any, errorInfo: any) {
    }
  
    render() {
      // @ts-ignore
      if (this.state.hasError) {
        // @ts-ignore
        const error = this.state.error.message;
        return <div>
          <h1>Error</h1>;
          <pre>{error}</pre>
          <button onClick={() => this.setState({hasError: false})}>Try again</button>
        </div>
      }
      // @ts-ignore
      return this.props.children; 
    }
  }