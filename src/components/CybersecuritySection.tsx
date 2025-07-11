import TerminalEffect from './TerminalEffect';

export default function CybersecuritySection() {
  return (
    <section id="cybersecurity" className="cybersecurity py-20 bg-black/90 flex justify-center items-center">
      <div className="terminal bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="terminal-header flex items-center justify-between px-4 py-2 bg-gray-800 rounded-t-lg">
          <span className="terminal-title font-mono text-primary">Security Console</span>
          <div className="terminal-controls flex gap-2">
            <span className="control close w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="control minimize w-3 h-3 rounded-full bg-yellow-400 inline-block" />
            <span className="control maximize w-3 h-3 rounded-full bg-green-500 inline-block" />
          </div>
        </div>
        <div className="terminal-content p-4">
          <div className="matrix-effect h-32 bg-black/80 rounded mb-2" />
          <TerminalEffect />
        </div>
      </div>
    </section>
  );
} 