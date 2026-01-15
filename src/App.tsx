import "./App.css";
import Welcome from "./components/welcome";
import Header from "./components/Header";
import Card from "./components/card";
import Counter from "./components/Counter";

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
        <div className="flex flex-row gap-9 border-2 border-red-500 ">
          <Card header="ini heder 1" desc="ini deskripsi 1 jadi inininini" />
          <Card header="ini heder 2" desc="ini deskripsi 2 jadi inininini" />
        </div>
        <Counter></Counter>
      </div>
    </>
  );
}

export default App;
