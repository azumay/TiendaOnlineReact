import { CodeBlock, dracula } from "react-code-blocks";

export default function CodiBloc(props) {
  const { codi = "", idioma = "js", veureLineas = true, primeraLinea = 1 } = props;

  return (
    <CodeBlock
      text={codi}
      language={idioma}
      showLineNumbers={veureLineas}
      startingLineNumber={primeraLinea}
      theme={dracula}
    />
  );
}