import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    // A monitoring integration can subscribe without collecting form contents.
    window.dispatchEvent(new CustomEvent('portfolio:error', {
      detail: { message: error.message, componentStack: info.componentStack },
    }));
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="site-status-page">
        <h1>Something went wrong</h1>
        <p>Please reload the page or contact me directly.</p>
        <button type="button" onClick={() => window.location.reload()}>Reload page</button>
        <a href="mailto:azrul.amaline16@gmail.com">Email Azrul</a>
      </main>
    );
  }
}
