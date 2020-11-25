import { useQuery } from 'react-query'
import { CheckCircleOutlined } from '@ant-design/icons'

function Example() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="container md-auto p-4">
      <h1 className="font-sans text-3xl mb-8">
        <CheckCircleOutlined className="relative -top-1.5" /> React Go Blog
      </h1>
      <pre className="overflow-y-auto h-72 p-4 rounded-md bg-gray-800 text-yellow-400 text-xs">
        <code>{JSON.stringify(data.slice(0, 10), null, 2)}</code>
      </pre>
    </div>
  )
}

export default Example
