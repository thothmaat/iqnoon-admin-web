import React from 'react';

interface IPageProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
}

interface IPageState {
  error?: string | Error | null;
}

export default class Page extends React.PureComponent<IPageProps, IPageState> {
  componentDidMount() {
    if (this.props.title) {
      document.title = this.props.title;
    }
  }

  render() {
    const { className = '' } = this.props;
    return (
      <div className={`brs-page ${className}`}>
      </div>
    );
  }
}
