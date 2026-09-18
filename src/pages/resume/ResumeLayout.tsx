import { useEffect, useState } from 'react';
import { FiTerminal } from 'react-icons/fi';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import Footer from '../../components/footer/Footer';
import './ResumeLayout.css';

const command = 'resume build --next';
const outputLines = [
  'Resume v2.0 is under construction.',
  'Loading recent work, projects, and experience.',
];

const ResumeLayout = () => {
  const [typedCommand, setTypedCommand] = useState('');
  const [visibleOutputCount, setVisibleOutputCount] = useState(0);
  const isCommandComplete = typedCommand.length === command.length;
  const isComplete = isCommandComplete && visibleOutputCount === outputLines.length;

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        if (!isCommandComplete) {
          setTypedCommand(command.slice(0, typedCommand.length + 1));
          return;
        }

        if (!isComplete) {
          setVisibleOutputCount((count) => count + 1);
          return;
        }

        setTypedCommand('');
        setVisibleOutputCount(0);
      },
      !isCommandComplete ? 70 : !isComplete ? 600 : 3600,
    );

    return () => window.clearTimeout(timeout);
  }, [isCommandComplete, isComplete, typedCommand.length, visibleOutputCount]);

  return (
    <main className="container page">
      <section className="resume-page">
        <div className="resume-head">
          <SectionTitle>Resume</SectionTitle>
        </div>

        <div className="resume-construction" role="status" aria-live="polite">
          <div className="resume-construction-head">
            <span className="resume-construction-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="resume-construction-label">
              <FiTerminal /> resume-status
            </span>
          </div>
          <div className="resume-construction-body">
            <p>
              <span className="resume-construction-prompt">$</span> {typedCommand}
              {!isCommandComplete && <span className="resume-construction-cursor" aria-hidden="true" />}
            </p>
            {outputLines.slice(0, visibleOutputCount).map((line) => (
              <p className="resume-construction-output" key={line}>
                {line}
              </p>
            ))}
            {isComplete && (
              <p>
                <span className="resume-construction-prompt">$</span>{' '}
                <span className="resume-construction-cursor" aria-hidden="true" />
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ResumeLayout;
