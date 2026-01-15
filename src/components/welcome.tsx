type Welcomeprops = {
  name?: string;
  year: number;
  job?: string;
};

function Welcome(props: Welcomeprops) {
  const { name = "default valeu", year, job } = props;
  return (
    <div className="border-2 border-blue-500 p-5 rounded-4xl">
      {/* kalo name gak ada return defaul valeu tsb */}
      <p>Name: {name}</p>
      <p>Birth Year: {year}</p>
      {/* IF TERNARY : kalo job gak ada return null */}
      {props.job ? <p>Job: {job}</p> : null}
    </div>
  );
}

export default Welcome;
