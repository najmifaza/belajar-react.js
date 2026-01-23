import { useSearchParams } from "react-router";
import Button from "../components/Button";

function ProductListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));

  function HandleSortValeu(sortvaleu: string) {
    searchParams.set("sort", sortvaleu);
    setSearchParams(searchParams);
  }

  function HandleNameValeu(namevaleu: string) {
    searchParams.set("name", namevaleu);
    setSearchParams(searchParams);
  }
  return (
    <div className=" flex flex-col gap-4">
      <h1>Product List Page</h1>
      <ul className="text-left">
        <li>Sort: {searchParams.get("sort")}</li>
        <li>name: {searchParams.get("name")}</li>
      </ul>
      <div className="flex flex-row gap-2 justify-around">
        <Button
          onClick={function () {
            HandleSortValeu("price-desc");
          }}
        >
          Sort Price desc
        </Button>
        <Button
          onClick={function () {
            HandleSortValeu("price-asc");
          }}
        >
          Sort Price asc
        </Button>
        <Button
          onClick={function () {
            HandleSortValeu("most-popular");
          }}
        >
          Sort most popular
        </Button>
      </div>
      <div className="flex flex-row gap-2 justify-around">
        <Button
          onClick={function () {
            HandleNameValeu("Kaos");
          }}
        >
          Kaos Oblong
        </Button>
        <Button
          onClick={function () {
            HandleNameValeu("Kemeja");
          }}
        >
          Kemeja Kerja
        </Button>
        <Button
          onClick={function () {
            HandleNameValeu("Celana-Dalam");
          }}
        >
          Celana Dalam
        </Button>
      </div>
    </div>
  );
}

export default ProductListPage;
