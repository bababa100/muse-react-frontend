import React from 'react'
import { Card, Button } from 'semantic-ui-react'

function SongList(props) {
  console.log(props)
  const songs = props.songs.map((song) => {
    return (
      <Card key={song.id}>
        <Card.Content>
          <Card.Header>{song.title}</Card.Header>
          <Card.Description>{song.album}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={() => props.deleteSong(song.id)}>DeleteSong</Button>
          <Button>Edit Song</Button>
        </Card.Content>
      </Card>
    )
  })

  return <Card.Group>{songs}</Card.Group>
}

export default SongList
