import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { HomeProps, PostProps } from './types'
import RenderPost from '../../components/renderPost'
import styles from './styles'
import { MainHeader } from '../../components/header'
import FAB from '../../components/fab'

const Home = ({ navigation }: HomeProps) => {
  const data: Array<PostProps> = [
    {
      user: {
        name: "Malice martha",
        verified: true
      },
      post: {
        message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa. Aperiam, et, in eum, fuga aut voluptas doloribus natus consequatur consectetur rerum quas officia repellat. Quo, quae. Quas, quibusdam.",
      },
      tags: ["reading", "hobby", "books", "reading", "hobby", "books", "reading", "hobby", "books"]
    },
    {
      user: {
        name: "Malice martha",
        verified: true
      },
      post: {
        message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa. Aperiam, et, in eum, fuga aut voluptas doloribus natus consequatur consectetur rerum quas officia repellat. Quo, quae. Quas, quibusdam.",
      },
      tags: ["reading", "hobby", "books"]
    },
    {
      user: {
        name: "Malice martha",
        verified: true
      },
      post: {
        message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa. Aperiam, et, in eum, fuga aut voluptas doloribus natus consequatur consectetur rerum quas officia repellat. Quo, quae. Quas, quibusdam.",
      },
      tags: ["reading", "hobby", "books"]
    },
    {
      user: {
        name: "Malice martha",
        verified: false
      },
      post: {
        message: "lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ipsa. Aperiam, et, in eum, fuga aut voluptas doloribus natus consequatur consectetur rerum quas officia repellat. Quo, quae. Quas, quibusdam.",
      },
      tags: ["reading", "hobby", "books", "reading", "hobby", "books", "reading", "hobby", "books", "reading", "hobby", "books"]
    },
  ]

  // methods
  const navigateToCreatePost = () => {
    navigation.navigate("CreatePost")
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <RenderPost {...item} />}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContentcontainer}
        ListHeaderComponent={MainHeader}
        stickyHeaderHiddenOnScroll={true}
        stickyHeaderIndices={[0]}
      />
      <FAB
        onPress={navigateToCreatePost} />
    </SafeAreaView>
  )
}

export default Home