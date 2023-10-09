import styles from "../styles/TagsFilter.module.css"
interface TagsFilterProps {
    tags: string[]; 
    selectedTags: string[]; 
    onTagClick: (tag: string) => void;
}

export default function TagsFilter(props: TagsFilterProps) {
    return <div>
          <ul className={styles.listTags}>
            {props.tags.map((tag) => (
              <li
                key={tag}
                className={props.selectedTags.includes(tag) ? styles.selectedTag : ''}
                onClick={() => props.onTagClick(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

}