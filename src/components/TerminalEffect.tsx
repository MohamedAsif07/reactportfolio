'use client';
import { useEffect, useRef } from 'react';

const commands = [
  'Initializing system...',
  'Loading security protocols...',
  'Scanning for vulnerabilities...',
  'Checking firewall status...',
  'Verifying encryption...',
  'System secure and operational.'
];

export default function TerminalEffect() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;
    let currentCommand = 0;
    let currentIndex = 0;
    let typingSpeed = 50;
    let timeoutId: NodeJS.Timeout;

    function typeCommand(command: string) {
      if (!el) return;
      if (currentIndex < command.length) {
        el.textContent += command.charAt(currentIndex);
        currentIndex++;
        timeoutId = setTimeout(() => typeCommand(command), typingSpeed);
      } else {
        el.textContent += '\n';
        currentCommand++;
        currentIndex = 0;
        if (currentCommand < commands.length) {
          timeoutId = setTimeout(() => typeCommand(commands[currentCommand]), 1000);
        }
      }
    }

    el.textContent = '';
    typeCommand(commands[0]);
    return () => clearTimeout(timeoutId);
  }, []);

  return <div ref={terminalRef} className="terminal-text font-mono text-green-400 whitespace-pre h-24" />;
} 