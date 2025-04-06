import { Text, TextInput, TouchableOpacity, View } from "react-native"
import Label from "../label"
import styles from "./styles"
import { InputTagsProps, InputTextProps } from "./types"
import colors from "../../utils/colors"
import { useEffect, useState } from "react"
const InputTitle = ({ value }: { value: string }) => {
    return <Label value={value} style={styles.inputTitle} numberOfLines={1} />
}
export const InputText = ({
    onChangeText,
    value,
    isError,
    title,
    errorLabel,
    renderRightComponent,
    placeholder,
    style
}: InputTextProps) => {
    return (
        <View style={[styles.container, style]}>
            <InputTitle value={title} />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder ?? "Enter here..."}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.lightWhite}
                />
                {renderRightComponent && renderRightComponent()}
            </View>
            {isError && <Label style={styles.errorLabel} value={errorLabel ?? "Validation Error"} />}
        </View>
    )
}

export const InputTags = ({
    onChange,
    value,
    title,
    placeholder,
    style
}: InputTagsProps) => {

    const [tagValue, setTagValue] = useState("");
    const [tags, setTags] = useState<Array<string>>(value ?? []);

    // useEffect
    useEffect(() => {
        onChange && onChange(tags)
    }, [tags])

    // methods
    const addTag = () => {
        if (tagValue.trim().length) {
            setTags([tagValue, ...tags]);
            setTagValue(""); // clear input
        }
    }
    const removeTag = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    }

    return <View>
        <InputText
            onChangeText={setTagValue}
            value={tagValue}
            title={title}
            placeholder={placeholder}
            style={style}
            renderRightComponent={() => <TouchableOpacity onPress={addTag} style={styles.rightComponent} >
                <Label value={`Add`} style={styles.rightComponentLabel} />
            </TouchableOpacity>}
        />
        {!!tags.length && <View style={styles.tagsContainer}>
            {
                tags.map((tag, index) => <TouchableOpacity key={index} onPress={() => removeTag(index)} style={styles.tagContainer}>
                    <Label value={tag} style={styles.tagLabel} numberOfLines={1} />
                </TouchableOpacity>)
            }
        </View>}
    </View>
}