type cardprops = {
  header: string;
  desc?: string;
};

function Card(props: cardprops) {
  return (
    <div className="max-w-full min-w-0 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 dark:bg-gray-800 cursor-pointer group text-left">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
        Nama {props.header}
      </h3>
      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
        Asal : {props.desc}
      </h3>
    </div>
  );
}

export default Card;
