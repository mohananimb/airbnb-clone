import Banner from '../components/Banner'
import Header from '../components/Header'
import MediumCard from '../components/Medium-Card'
import SmallCard from '../components/Small-Card'

export default function Home ({ exploreData, cardsData }) {
  return (
    <div className=''>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, location, distance }) => (
              <div key={img}>
                <SmallCard img={img} location={location} distance={distance} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='space-x-3 flex overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }) => (
              <div key={img}>
                <MediumCard img={img} title={title} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res =>
    res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then(res =>
    res.json()
  )
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
