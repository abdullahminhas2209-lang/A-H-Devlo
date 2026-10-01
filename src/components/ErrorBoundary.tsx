import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled runtime error in A&H Devlo application:', error, errorInfo);
  }

  public handleReload = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#030B14] text-[#F8FAFC] flex items-center justify-center p-6 select-none font-sans">
          <div className="max-w-md w-full bg-[#081726] border border-[#163554] rounded-2xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl font-extrabold text-white tracking-tight font-heading">
                Something went wrong.
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed font-body">
                We encountered an unexpected interface error. Our studio monitoring has been notified.
              </p>
            </div>

            <button
              onClick={this.handleReload}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm transition-all cursor-pointer shadow-lg shadow-cyan-950/50"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Studio</span>
            </button>

            <div className="pt-2 text-xs text-slate-500 font-mono">
              A&amp;H Devlo Studio — Clean by Design
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
