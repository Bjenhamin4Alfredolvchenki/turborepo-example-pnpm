import Image from 'next/image'

type Props = {
  name: string
  picture: string
  twitterUsername: string
}

const Avatar = ({ name, picture, twitterUsername }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        height={32}
        width={32}
        layout="fixed"
        priority={true}
        className="rounded-full"
        alt={name}
      />
      <dl className="ml-2 text-sm font-medium leading-4 whitespace-no-wrap text-left">
        <dt className="sr-only">Name</dt>
        <dd className="text-gray-900 dark:text-white ">{name}</dd>
        <dt className="sr-only">Twitter</dt>
        <dd>
          <a
            href={`https://twitter.com/${twitterUsername}`}
            className="text-xs  text-blue-500 betterhover:hover:text-blue-600"
          >
            @{/* */}
            {twitterUsername}
          </a>
        </dd>
      </dl>
    </div>
  )
}

export default Avatar
