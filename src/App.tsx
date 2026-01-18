import "./App.css";
import Welcome from "./components/welcome";
import Header from "./components/Header";
import Counter from "./components/Counter";
import LampToggle from "./components/LampToggle";

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
};

const teachers: Teacher[] = [
  {
    name: "Najmi",
    job: "student",
    year: 2000,
    id: 1,
  },
  {
    name: "udin",
    job: "kaprodi",
    year: 1991,
    id: 2,
  },
  {
    name: "ipung",
    job: "kajjur",
    year: 1999,
    id: 3,
  },
  {
    name: "ucup",
    job: "satpam",
    year: 1990,
    id: 4,
  },
];

function App() {
  return (
    <>
      <div className="flex flex-col gap-9 border-2 border-red-500">
        <Header />
        <text className="text-9xl font-bold">Hallo World</text>
        <div className="flex flex-row gap-9 border-2 border-red-500">
          {teachers.map((teacher) => {
            return (
              <Welcome
                name={teacher.name}
                job={teacher.job}
                year={teacher.year}
                key={teacher.id}
              />
            );
          })}
        </div>
        <Counter></Counter>
      </div>
      <LampToggle></LampToggle>
    </>
  );
}

export default App;
