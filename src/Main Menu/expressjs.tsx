import React, { useState, useEffect } from 'react';

interface DataItem {
  field1: string;
  field2: string;
}

const DataComponent: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/gegevens');
      const jsonData: DataItem[] = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Fout bij het ophalen van gegevens van de server:', error);
    }
  };

  return (
    <div>
      <h1>Gegevens van de server:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Field1: {item.field1}, Field2: {item.field2}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataComponent;