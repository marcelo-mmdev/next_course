type DefaultInputProps = {
  type: 'text' | 'number' | 'search';
};
export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor='meuInput'>Task</label>
      <input id='meuInput' type={type} />
    </>
  );
}
