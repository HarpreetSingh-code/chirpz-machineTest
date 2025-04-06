import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { CreatePostProps, Form } from './types'
import styles from './styles'
import { NavigationHeader } from '../../components/header'
import Label from '../../components/label'
import { InputTags, InputText } from '../../components/input'

const CreatePost = ({ }: CreatePostProps) => {
  // state
  const [form, setForm] = useState<Form>({
    post: { isValid: true, value: "" },
    tags: { isValid: true, value: [] }
  })

  // methods
  const onSubmitPost = () => {
    let isvalid = true;
    if (!form.post.value.trim().length) { // validate message
      isvalid = false;
      setForm({ ...form, post: { ...form.post, isValid: false } })
    }

    if (!form.tags.value.length) { // validate tags
      isvalid = false;
      Alert.alert('Error', 'Please add tags');
    }

    if (isvalid) {
      const data = {
        post: form.post.value,
        tags: form.tags.value
      };
      
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader
        renderRightComponent={() => <TouchableOpacity
          activeOpacity={0.8}
          onPress={onSubmitPost}
          style={styles.headerPostBtn}>
          <Label value={`Post`} style={styles.headerPostLabel} />
        </TouchableOpacity>}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <InputText
          title='Create'
          placeholder="What's on your mind?"
          onChangeText={(text) => setForm({ ...form, post: { ...form.post, value: text, isValid: true } })}
          value={form.post.value}
          isError={!form.post.isValid}
          errorLabel="Enter something here"
        />
        <InputTags
          title='Add tags'
          placeholder="Write tags"
          onChange={(tags) => { setForm({ ...form, tags: { ...form.tags, value: tags, isValid: true } }) }}
          value={form.tags.value}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreatePost