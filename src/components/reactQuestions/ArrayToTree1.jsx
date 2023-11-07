const data = [
  {
    id: 1,
    name: 'Node 1',
    children: [
      {
        id: 2,
        name: 'Node 1.1',
        children: [
          {
            id: 3,
            name: 'Node 1.1.1',
          },
          {
            id: 4,
            name: 'Node 1.1.2',
          },
        ],
      },
      {
        id: 5,
        name: 'Node 1.2',
        children: [
          {
            id: 6,
            name: 'Node 1.2.1',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Node 2',
    children: [
      {
        id: 8,
        name: 'Node 2.1',
      },
    ],
  },
  {
    id: 9,
    name: 'Node 3',
  },
];

const render = (data) => (
  <ul
    style={{
      backgroundColor: 'lightgray',
      padding: '10px',
      borderRadius: '5px',
      paddingLeft: '30px',
    }}
  >
    {data.map((item) => (
      <li key={item.id}>
        {item.name}
        {item.children ? render(item.children) : null}
      </li>
    ))}
  </ul>
);

const ArrayToTree1 = () => {
  return (
    <div
      className="ArrayToTree1"
      style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
    >
      <h3>2. Render a recursive list: </h3>
      {render(data)}
    </div>
  );
};

export default ArrayToTree1;
