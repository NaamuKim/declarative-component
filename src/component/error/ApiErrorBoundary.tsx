import React from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  shouldHandleError: boolean;
  shouldRethrow: boolean;
  error?: Error;
};

export class ApiErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shouldHandleError: true,
      shouldRethrow: false,
    };
  }
  static getDerivedStateFromError(error: Error): State {
    console.log(error);
    if (error) {
      return {
        shouldHandleError: false,
        shouldRethrow: true,
        error,
      };
    }
    return {
      shouldHandleError: true,
      shouldRethrow: false,
    };
  }

  render() {
    if (this.state.shouldRethrow) {
      throw this.state.error;
    }
    if (this.state.shouldHandleError) {
      return this.props.children;
    }
    return <div>error</div>;
  }
}
