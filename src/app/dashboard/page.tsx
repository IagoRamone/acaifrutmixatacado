"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig"; 
const Dashboard = () => { 
  interface User {
    id: string;
    nome: string;
    cpfCnpj: string;
    cep: string;
    endereco: string;
    telefone: string;
    email: string;
  }
  
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "clientes"));
        const usersList: User[] = [];
        
        querySnapshot.forEach((doc) => {
          usersList.push({ ...doc.data(), id: doc.id } as User);
        });
    
        setUsers(usersList);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao obter dados:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <div className="w-full max-w-[1200px] md:w-500px">
          <h2 className="text-xl font-bold">Usuários Cadastrados</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="mb-2 p-4 border rounded">
                <p><strong>Nome:</strong> {user.nome}</p>
                <p><strong>CPF/CNPJ:</strong> {user.cpfCnpj}</p>
                <p><strong>CEP:</strong> {user.cep}</p>
                <p><strong>Endereço:</strong> {user.endereco}</p>
                <p><strong>Telefone:</strong> {user.telefone}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
