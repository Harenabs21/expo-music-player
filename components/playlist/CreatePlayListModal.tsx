import { createModalStyle } from '@/styles/create-playlist-modal.style';
import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface CreatePlaylistModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (name: string) => void;
}

const CreatePlaylistModal: React.FC<CreatePlaylistModalProps> = ({ visible, onClose, onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name); // Submit the playlist name
      setName(''); // Clear input
      onClose(); // Close the modal
    }
  };
  const handleOutsidePress = () => {
    Keyboard.dismiss(); // Dismiss keyboard when clicking outside
    onClose(); // Close modal
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View style={createModalStyle.overlay}>
          <TouchableWithoutFeedback>
            <View style={createModalStyle.modal}>
              <Text style={createModalStyle.title}>Create Playlist</Text>
              <TextInput
                style={createModalStyle.input}
                placeholder="Enter playlist name"
                value={name}
                onChangeText={setName}
              />
              <View style={createModalStyle.buttons}>
                <Button title="Create" onPress={handleSubmit} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CreatePlaylistModal;
