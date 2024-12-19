interface PageProps{
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}


const Page = ({searchParams}: PageProps) => {
    const {id} = searchParams
    return <p>{id}</p>
}

export default Page 