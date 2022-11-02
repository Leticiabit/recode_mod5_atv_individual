import './css/styles.css'
import Helmet from 'react-helmet';

const Home = () => {
  return (
    <>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
      </head>
      <Helmet>      
      <title>Leticiabit</title>
    </Helmet>

      <div className="container">
        <h1>Agência de viagens Leticiabit</h1>
        <div id="apresentacao">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu libero sed ipsum maximus posuere. In tortor sem, pretium a pretium quis, consectetur in sem. Integer ac leo ac mauris egestas vulputate. Morbi sodales orci purus, imperdiet egestas odio tristique at. Sed libero metus, tempus id scelerisque eget, commodo nec leo. Aliquam eleifend id justo id facilisis. Proin aliquet ornare dictum. Ut molestie convallis vestibulum. Pellentesque vel risus bibendum, sodales nisi laoreet, dapibus libero. Maecenas consectetur, diam a condimentum mollis, lacus velit accumsan erat, vitae ornare lectus justo sit amet eros. Aenean quis massa ex. Donec et arcu eu nibh pulvinar molestie. Proin congue ex eget ex porta, non porttitor eros gravida. Pellentesque lobortis tortor ac diam mollis ornare. 
          </p>
          <p>
            Suspendisse id est neque. Sed in mattis libero. Nunc tempor libero vitae interdum venenatis. In lectus sapien, imperdiet et scelerisque id, hendrerit quis nulla. Aliquam leo dolor, commodo vitae lectus eu, condimentum congue nunc. Nulla tempus felis enim, et posuere quam dictum non. Vivamus finibus ullamcorper eros in pellentesque. Curabitur vehicula ut ligula sed porta. Phasellus vulputate, dui dignissim vulputate hendrerit, eros ex ultricies tellus, nec ullamcorper mauris felis et magna. In hac habitasse platea dictumst. Nam lacinia diam sed tincidunt congue. Mauris mattis sollicitudin leo, vitae faucibus ante dignissim in.
          </p>
        </div>
      </div>
     
    </>
  )
};

export default Home;