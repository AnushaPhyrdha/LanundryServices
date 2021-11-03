function summaryfinal(props) {
  return (
    <div>
      <div class="row trcss">
        <div class="col-lg-4">{props.name}</div>
        <div class="col-lg-4">
          {(props.type.wash ? "Washing" : "") +
            "," +
            (props.type.fold ? "Folding" : "") +
            "," +
            (props.type.pack ? "Packing" : "") +
            "," +
            (props.type.press ? "Pressing" : "")}
        </div>
        <div class="col-lg-4 rate-head">
          {props.cost}=<spam class="spamrate">100</spam>
        </div>
      </div>
    </div>
  );
}

export default summaryfinal;
