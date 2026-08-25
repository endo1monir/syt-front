import "./StatsCounter.css";
import CountUpModule from "react-countup";

const AnimatedCounter =
  (
    CountUpModule as unknown as {
      default?: typeof CountUpModule;
    }
  ).default ?? CountUpModule;

const stats = [
  {
    id: 1,
    value: 5,
    label: "سنين الخبرة",
  },
  {
    id: 2,
    value: 5000,
    label: "عدد الانفلونسرز",
  },
  {
    id: 3,
    value: 89,
    suffix: "%",
    label: "نسبة رضا العملاء",
  },
  {
    id: 4,
    value: 241,
    label: "عدد المشروعات",
  },
];

const StatsCounter = () => {
  return (
    <section className="stats-section">
      <div className="stats-counter">
        {stats.map((stat) => (
          <div
            className="stats-counter__item"
            key={stat.id}
          >
            <div className="stats-counter__value">
              <AnimatedCounter
                start={0}
                end={stat.value}
                duration={2.5}
                suffix={stat.suffix ?? ""}
                useGrouping={false}
                enableScrollSpy
                scrollSpyOnce
                scrollSpyDelay={150}
              />
            </div>

            <p className="stats-counter__label">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;