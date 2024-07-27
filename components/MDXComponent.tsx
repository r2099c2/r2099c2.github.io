interface MDXComponentsProps {
  [key: string]: React.FC<any>;
}

const MDXComponents: MDXComponentsProps = {
  h1: (props) => <h1 className="text-4xl font-bold mt-6 mb-4" {...props} />,
  h2: (props) => (
    <h2
      className="text-3xl font-semibold mt-6 mb-4 border-b-2 border-gray-200 pb-2"
      {...props}
    />
  ),
  h3: (props) => <h3 className="text-2xl font-semibold mt-6 mb-4" {...props} />,
  h4: (props) => <h4 className="text-xl font-semibold mt-6 mb-4" {...props} />,
  h5: (props) => <h5 className="text-lg font-semibold mt-6 mb-4" {...props} />,
  h6: (props) => (
    <h6 className="text-base font-semibold mt-6 mb-4" {...props} />
  ),
  p: (props) => <p className="mt-0 mb-4" {...props} />,
  a: (props) => <a className="link-underline" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 mt-0 mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 mt-0 mb-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  code: (props) => <code className="bg-gray-600 rounded p-1" {...props} />,
  pre: (props) => (
    <pre className="bg-gray-600 rounded p-4 overflow-x-auto" {...props} />
  ),
  blockquote: (props) => (
    <blockquote
      className="pl-4 border-l-4 border-gray-200 my-4 italic text-gray-300"
      {...props}
    />
  ),
};

export default MDXComponents;
