import { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import './Calendar.css';

const GITHUB_USERNAME = 'harikrishna8121999';

/** Calendar levels 0-4 — see DESIGN.md "Calendar Colors". */
const calendarTheme = {
  dark: ['#383838', '#606060', '#8C8C8C', '#BABABA', '#EBEBEB'],
};

interface TooltipState {
  x: number;
  y: number;
  content: string;
}

const Calendar = () => {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  return (
    <div className="calendar">
      <GitHubCalendar
        username={GITHUB_USERNAME}
        colorScheme="dark"
        theme={calendarTheme}
        blockSize={10}
        blockMargin={3}
        fontSize={11}
        errorMessage="Couldn't load GitHub contributions right now."
        renderBlock={(block, activity) => (
          <g
            onMouseEnter={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              setTooltip({
                x: rect.left + rect.width / 2,
                y: rect.top,
                content: `${activity.count} contribution${
                  activity.count === 1 ? '' : 's'
                } on ${activity.date}`,
              });
            }}
            onMouseLeave={() => setTooltip(null)}
          >
            {block}
          </g>
        )}
      />

      {tooltip && (
        <span className="calendar-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
          {tooltip.content}
        </span>
      )}
    </div>
  );
};

export default Calendar;
