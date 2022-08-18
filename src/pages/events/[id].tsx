import { useRouter } from "next/router";

const EventDetailViewPage = () => {
  const { id } = useRouter().query;

  return (
    <div>
      <h1>Event Detail View | {id}</h1>
    </div>
  );
};

export default EventDetailViewPage;
