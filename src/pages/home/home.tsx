import GlobalLayout from '../../layouts/GlobalLayout'
import CardTeksHome from '../../components/card/CardTeksHome'
import CardRecomenHome from '../../components/card/CardRecomenHome'
import CardImageHome from '../../components/card/CardImageHome'
import CardImageHome2 from '../../components/card/CardImageHome2'

const Home = () => {
    return (
        <>
            <GlobalLayout>
                <div className='max-w-[1500px] mx-10'>
                    <CardTeksHome />
                    <CardRecomenHome />
                    <CardImageHome />
                    <CardImageHome2 />
                </div>
            </GlobalLayout>
        </>
    )
}

export default Home