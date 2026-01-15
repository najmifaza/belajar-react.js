type buttonprops = {
  onClick?: () => void;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

function Button(props: buttonprops) {
  return (
    <>
      <button
        onClick={props.onClick}
        className="inline-flex items-center gap-2 px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-200"
      >
        {props.icon}
        {props.children}
      </button>
    </>
  );
}

export default Button;
