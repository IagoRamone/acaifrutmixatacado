export default function HomePage() {
  return (
    <>      
      {/* WhatsApp Button */}
      <link
        rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        href="https://wa.me/5521964073564?text=Olá,Quero saber mais!"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#25d366',
          color: '#FFF',
          borderRadius: '50px',
          textAlign: 'center',
          fontSize: '30px',
          boxShadow: '1px 1px 2px #888',
          zIndex: 1000,
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i style={{ marginTop: '16px' }} className="fa fa-whatsapp"></i>
      </a>
      <div className='mx-auto w-full '>
        <Home />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </>
  );
}

function Home() {
  return (
    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white h-screen flex flex-col justify-center items-center">

      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/img/lp/background_inicial.png')" }}
      />

      <div className="relative z-10 text-center px-4">
       
        <img
          src="/img/lp/logo.png"
          alt="Logo"
          className="mx-auto mb-8"
          width={150}
          height={150}
        />
      <div className="bg-customFundo/80 w-full flex justify-center items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
        Aumente as vendas da sua loja com o nosso
        açaí <p className="text-customGreen">100% natural</p>
        </h1>
      </div>
      <br></br>
      <div className="bg-customFundo/80 w-full flex justify-center items-center text-center">
        <p className="text-lg md:text-3xl">
        Utilizamos a polpa de açaí mais pura e selecionamos os melhores ingredientes para garantir um produto de alta qualidade e sabor inigualável.
        </p>
      </div>
    </div>
  </div>
  );
}

function SectionOne() {
  return (
    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white h-screen flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/lp/segundapag.png')" }}
      />

      {/* Conteúdo central */}
      <div className="mt-10 mx-auto max-w-[1500px] relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {/* Imagem 1 */}
        <img
          src="/img/lp/card1.png"
          alt="Imagem 1"
          className="w-full max-w-[600px] mx-auto"
        />
        {/* Imagem 2 */}
        <img
          src="/img/lp/card2.png"
          alt="Imagem 2"
          className="w-full max-w-[600px] mx-auto"
        />
        {/* Imagem 3 */}
        <img
          src="/img/lp/card3.png"
          alt="Imagem 3"
          className="w-full max-w-[600px] mx-auto"
        />
      </div>
    </div>
  );
}

function SectionTwo() {
  return (
    <div className="relative bg-white text-white py-20 flex justify-center items-center">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-10">
        <div className="flex justify-center items-center">
          <img
            src="/img/lp/acai.png"
            alt="Imagem"
            className="w-full max-w-[1000px] h-auto mx-auto" 
          />
        </div>

        <div className="flex flex-col justify-center items-center bg-customForm p-8 rounded-lg shadow-lg">
        <img
            src="/img/lp/logo.png"
            alt="Imagem"
            className="w-full max-w-[150px] h-auto mx-auto mb-10" 
          />
          <p className="text-3xl font-bold text-center mb-6 text-black">Preencha o formulário para se cadastrar 
          e receber mais informações</p>
          <form className="w-full max-w-[1200px] md:w-500px"> 

            <div className="mb-4">
              <label htmlFor="cpfCnpj" className="block text-sm font-semibold text-customFundo">CPF/CNPJ</label>
              <input
                type="text"
                id="cpfCnpj"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                placeholder="Digite seu CPF ou CNPJ"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="endereco" className="block text-sm font-semibold text-customFundo">Endereço</label>
              <input
                type="text"
                id="endereco"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                placeholder="Digite seu endereço"
              />
            </div>

            {/* Telefone */}
            <div className="mb-4">
              <label htmlFor="telefone" className="block text-sm font-semibold text-customFundo">Telefone</label>
              <input
                type="text"
                id="telefone"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                placeholder="Digite seu telefone"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-customFundo">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"
                placeholder="Digite seu email"
              />
            </div>

            {/* Botão */}
            <button className="w-full py-3 bg-customButton text-white font-semibold rounded-lg mt-6 hover:bg-purple-800">
              Cadastre-se
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



function SectionThree() {
  return (
    <div className="relative bg-gradient-to-br from-purple-500 to-purple-700 text-white h-screen flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/lp/morango.png')" }}
      />
      
      <a
  href="https://wa.me/5521964073564?text=Olá,Quero ser um revendedor!"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="relative z-10 py-3 px-20 bg-customButton text-white font-semibold rounded-lg text-lg hover:bg-purple-800">
    Quero ser um revendedor
  </button>
</a>

    </div>
  );
}

