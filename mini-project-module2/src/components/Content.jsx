const Content = ({ recipes, deleteRecipe }) => {
  return (
    <section id="contentsbox">
      {recipes.map((oneRecipe) => {
        return (
          <div className="articles" key={oneRecipe.id}>
            <div
              className="closeBtn"
              onClick={() => {
                deleteRecipe(oneRecipe.id);
              }}
            >
              ❌
            </div>
            <h1>{oneRecipe.name}</h1>
            <img src={oneRecipe.image} />
            <p className="infobox">
              Calories: {oneRecipe.calories} <br />
              Servings: {oneRecipe.servings}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Content;
