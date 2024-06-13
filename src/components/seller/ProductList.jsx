import {
    ListBtn,
    ListBtnWrapper,
    ListPageBarWrpper,
    ListPageHead,
    ListTable,
    ListWrapper,
  } from "../../styles/seller/ListStyle.jsx";
  
  
  export const ProductLists = () => {
    return (
      <div>
        <ListPageBarWrpper>
          <ListPageHead>Class List</ListPageHead>
          {/* <ClassAddForm /> */}
        </ListPageBarWrpper>
        <ListWrapper>
          <ListTable>
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Teacher</th>
                <th scope="col">Time</th>
                <th scope="col">Subjects</th>
                <th scope="col">Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Class 1</td>
                <td>Teacher 1</td>
                <td>7.30 AM - 9.15 AM</td>
                <td>Math, English, Science</td>
                <td>
                    <ListBtnWrapper>
                      <ListBtn $orange type="button" class="btn btn-primary">
                        Edit
                      </ListBtn>
  
                      <ListBtn $red type="button" class="btn btn-primary">
                        Delete
                      </ListBtn>
                    </ListBtnWrapper>
                  </td>
              </tr>
              <tr>
                <td>Class 2</td>
                <td>Teacher 2</td>
                <td>7.30 AM - 9.15 AM</td>
                <td>Math, English, Science</td>
                <td>
                    <ListBtnWrapper>
                      <ListBtn $orange type="button" class="btn btn-primary">
                        Edit
                      </ListBtn>
  
                      <ListBtn $red type="button" class="btn btn-primary">
                        Delete
                      </ListBtn>
                    </ListBtnWrapper>
                  </td>
              </tr>
              <tr>
                <td>Class 3</td>
                <td>Teacher 3</td>
                <td>7.30 AM - 9.15 AM</td>
                <td>Math, English, Science</td>
                <td>
                    <ListBtnWrapper>
                      <ListBtn $orange type="button" class="btn btn-primary">
                        Edit
                      </ListBtn>
  
                      <ListBtn $red type="button" class="btn btn-primary">
                        Delete
                      </ListBtn>
                    </ListBtnWrapper>
                  </td>
              </tr>
              <tr>
                <td>Class 4</td>
                <td>Teacher 1</td>
                <td>6.00 AM - 7.30 AM</td>
                <td>Math, English, Science</td>
                <td>
                    <ListBtnWrapper>
                      <ListBtn $orange type="button" class="btn btn-primary">
                        Edit
                      </ListBtn>
  
                      <ListBtn $red type="button" class="btn btn-primary">
                        Delete
                      </ListBtn>
                    </ListBtnWrapper>
                  </td>
              </tr>
              <tr>
                <td>Class 5</td>
                <td>Teacher 2</td>
                <td>6.00 AM - 7.30 AM</td>
                <td>Math, English, Science</td>
                <td>
                    <ListBtnWrapper>
                      <ListBtn $orange type="button" class="btn btn-primary">
                        Edit
                      </ListBtn>
  
                      <ListBtn $red type="button" class="btn btn-primary">
                        Delete
                      </ListBtn>
                    </ListBtnWrapper>
                  </td>
              </tr>
              <tr>
                <td>Class 6</td>
                <td>Teacher 3</td>
                <td>6.00 AM - 7.30 AM</td>
                <td>Math, English, Science</td>
                <td>
                    <ListBtnWrapper>
                      <ListBtn $orange type="button" class="btn btn-primary">
                        Edit
                      </ListBtn>
  
                      <ListBtn $red type="button" class="btn btn-primary">
                        Delete
                      </ListBtn>
                    </ListBtnWrapper>
                  </td>
              </tr>
            </tbody>
          </ListTable>
        </ListWrapper>
      </div>
    );
  };
  