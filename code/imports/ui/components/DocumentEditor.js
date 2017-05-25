/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, InputGroup, Button } from 'react-bootstrap';
import documentEditor from '../../modules/document-editor.js';

export default class DocumentEditor extends React.Component {
  componentDidMount() {
    documentEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="title"]').focus(); }, 0);
  }

  render() {
    const { doc } = this.props;
    return (<form
      ref={ form => (this.documentEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          type="text"
          name="title"
          defaultValue={ doc && doc.title }
          placeholder="Oh, The Places You'll Go!"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Category</ControlLabel>
        <FormControl
          componentClass="select"
          name="category"
          defaultValue={ doc && doc.category }
        >
          <option value="idea">Idea</option>
          <option value="thought">Thought</option>
          <option value="concept">Concept</option>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Body</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="body"
          defaultValue={ doc && doc.body }
          placeholder="Congratulations! Today is your day. You're off to Great Places! You're off and away!"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Tags</ControlLabel>
        <FormControl
          type="text"
          name="tags"
          defaultValue={ doc && doc.tags }
          placeholder="Comma-separated (e.g., idea, thought, concept) list of tags"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Author Twitter</ControlLabel>
        <InputGroup>
          <InputGroup.Addon>@</InputGroup.Addon>
          <FormControl
            type="text"
            name="twitter"
            defaultValue={ doc && doc.twitter }
            placeholder="Author's Twitter username (no @ symbol)."
          />
        </InputGroup>
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { doc && doc._id ? 'Save Changes' : 'Add Document' }
      </Button>
    </form>);
  }
}

DocumentEditor.propTypes = {
  doc: PropTypes.object,
};
