import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { HomeProps, PostProps } from './types'
import RenderPost from '../../components/renderPost'
import styles from './styles'
import { MainHeader } from '../../components/header'
import FAB from '../../components/fab'
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks'
import { getChirpzHomeScreenListApi } from '../../redux/thunks/appThunk'
import Label from '../../components/label'

const Home = ({ navigation }: HomeProps) => {
  // hooks
  const dispatch = useAppDispatch();
  const { chirpzList: { data, pagination } } = useAppSelector(state => state.appSlice);

  useEffect(() => {
    fetchChirpzList()
  }, [])

  // methods
  const fetchChirpzList = (page?: number) => { // API call
    dispatch(getChirpzHomeScreenListApi({ page }))
      .unwrap()
      .finally(() => { })
  }

  const navigateToCreatePost = () => { navigation.navigate("CreatePost") }
  const onEndReached = () => {
    if (pagination.current < pagination.total) {
      fetchChirpzList(pagination.current + 1)
    }
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
        onEndReached={onEndReached}
        ListEmptyComponent={() => <Label value={"Woops, No chirps found"} style={styles.emptyListLabel} />}
      />
      <FAB
        onPress={navigateToCreatePost} />
    </SafeAreaView>
  )
}

export default Home