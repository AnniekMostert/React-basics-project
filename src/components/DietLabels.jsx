export const DietLabels = ({recipe}) => {
  return (
    <ul>
      {recipe.dietLabels.map((label) => (
        <li key={label}>{label}</li>
      ))}
    </ul>
  );
};
