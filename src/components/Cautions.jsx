export const Cautions = ({recipe}) => {
    return (
      <ul>
        {recipe.cautions.map((label) => (
          <li key={label}>{label}</li>
        ))}
      </ul>
    );
  };