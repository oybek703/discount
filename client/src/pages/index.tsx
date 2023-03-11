import Head from 'next/head'
import { withLayout } from '@/layout'
import SearchComponent from '@/components/Search'
import { Typography } from '@mui/material'
import PageHead from '@/components/PageHead'

function Home() {
  return (
    <>
      <PageHead title="Discounts - find cheapest!">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </PageHead>
      <SearchComponent />
      <Typography variant="h3">Home page</Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        commodi distinctio dolorum excepturi maiores nam numquam omnis
        perferendis possimus sunt! Alias amet architecto aspernatur autem
        consequatur dignissimos distinctio dolores eaque, earum eligendi
        excepturi exercitationem harum id illum incidunt molestiae praesentium
        rem repellendus reprehenderit vel! A aliquid atque distinctio, enim ex
        facilis fugiat hic id illo impedit in inventore magnam minima odio
        officiis perferendis quia quos, recusandae sed similique. Ab aliquam
        commodi debitis ipsa itaque officia quia, vel! Atque dolorum eaque
        inventore laboriosam magni rem? Animi, commodi fugiat labore molestiae
        necessitatibus sapiente tempore unde voluptates. Aspernatur facere iste,
        nam porro quos ullam voluptas? Amet fugit, harum laborum magni porro
        reprehenderit sit veritatis. Aliquid, at autem debitis dolorem est eum
        eveniet id nesciunt nisi nulla recusandae sequi velit. Aliquam
        consectetur dignissimos facilis possimus voluptatem! Accusantium atque
        aut cum deserunt dicta dolorum error esse et eveniet ex excepturi harum
        id illum impedit necessitatibus placeat provident quasi qui quos
        recusandae sint sit soluta temporibus, tenetur ullam, voluptate
        voluptates! Accusamus ad distinctio explicabo, mollitia omnis quasi
        sapiente voluptate. Corporis cum dicta earum mollitia optio quae velit.
        Ad aperiam, dicta, distinctio enim esse expedita in incidunt inventore
        labore magnam nemo nesciunt, pariatur perferendis perspiciatis
        reiciendis rem sed sequi similique sit sunt tempore voluptate voluptates
        voluptatum. Ad architecto commodi earum id porro quaerat quas quos sint.
        Alias aspernatur blanditiis incidunt inventore itaque ratione? Ab culpa
        dicta doloremque et facere, illo reiciendis voluptatibus. A alias animi
        aperiam debitis deleniti deserunt dolorem doloremque doloribus eum,
        excepturi fugiat in, inventore nam natus neque odio perspiciatis quas,
        quia rem sequi sunt unde voluptates. Adipisci consequatur cumque facere
        itaque nihil officia omnis perspiciatis quae sunt temporibus! Architecto
        commodi dolore error eum harum hic illum laboriosam nam nobis, officiis
        omnis provident, sed sequi, sit tempora velit vero. Minus natus optio
        possimus quod voluptates.
      </Typography>
    </>
  )
}

export default withLayout(Home)
