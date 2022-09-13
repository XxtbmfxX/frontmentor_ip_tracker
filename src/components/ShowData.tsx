function ShowData({ data }: any) {
  if (!data) {
    return <article className="Main_Card"></article>;
  } else {
    return (
      <article className="Main_Card">
        <section className="Card_information">
          <span>IP ADDRESS</span>
          <h2>{data ? data.ip : "- - - -"}</h2>
        </section>
        <section className="Card_information">
          <span>Location</span>
          <h2>
            {data ? data.location.city : "- - - -"},
            {data ? data.location.region : "- - - -"}
            {data ? data.location.postalCode : "- - - -"}
          </h2>
        </section>
        <section className="Card_information">
          <span>TIMEZONE</span>
          <h2>{data ? data.location.timezone : "- - - -"}</h2>
        </section>
        <section className="Card_information">
          <span>ISP</span>
          <h2>{data ? data.isp : "- - - -"}</h2>
        </section>
      </article>
    );
  }
}

export default ShowData;
