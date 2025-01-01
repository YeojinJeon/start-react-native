import React from "react";
import { Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const MyButton = ({ title = "default", ...props }) => {
    // props.title = 'ooo';
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#3498db',
                padding: 16,
                margin: 10,
                borderRadius: 8,
            }}
            onPress={() => alert('Press MyButton!!!')}>
            <Text style={{ color: 'white', fontSize: 24 }}>
                {props.children || title}</Text>
        </TouchableOpacity>
    );
};

MyButton.propTypes = {
    title: PropTypes.string,
};

export default MyButton;


