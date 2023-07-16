import React from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  shouldHandleError: boolean;
  shouldRethrow: boolean;
  error: Error | null;
  render?: () => React.ReactNode;
};

export class ApiErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shouldHandleError: false,
      shouldRethrow: false,
      error: null,
    };
  }
  static getDerivedStateFromError(error: Error): State {
    return {
      shouldHandleError: true,
      shouldRethrow: false,
      error,
    };
  }

  render() {
    if (this.state.shouldRethrow && this.state.error) {
      throw this.state.error;
    }
    if (!this.state.shouldHandleError) {
      console.log(this.props.children);
      return this.props.children;
    }
    return <>Error...</>;
  }
}
