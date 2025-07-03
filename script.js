document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the system
    const sampleData = {
        students: [
            {
                id: 'S1001',
                name: 'John Doe',
                dob: '2010-05-15',
                gender: 'Male',
                class: 'Grade 5',
                section: 'A',
                address: '123 Main St, Cityville',
                parentName: 'Jane Doe',
                parentContact: '555-123-4567',
                admissionDate: '2022-09-01',
                photo: 'https://via.placeholder.com/150'
            },
            {
                id: 'S1002',
                name: 'Sarah Smith',
                dob: '2011-08-22',
                gender: 'Female',
                class: 'Grade 4',
                section: 'B',
                address: '456 Oak Ave, Townsville',
                parentName: 'Michael Smith',
                parentContact: '555-987-6543',
                admissionDate: '2022-09-01',
                photo: 'https://via.placeholder.com/150'
            },
            {
                id: 'S1003',
                name: 'Alex Johnson',
                dob: '2010-11-10',
                gender: 'Male',
                class: 'Grade 5',
                section: 'A',
                address: '789 Pine Rd, Villageton',
                parentName: 'Lisa Johnson',
                parentContact: '555-456-7890',
                admissionDate: '2023-01-15',
                photo: 'https://via.placeholder.com/150'
            },
            {
                id: 'S1004',
                name: 'Emily Wilson',
                dob: '2012-03-25',
                gender: 'Female',
                class: 'Grade 3',
                section: 'C',
                address: '321 Elm St, Hamletville',
                parentName: 'David Wilson',
                parentContact: '555-789-0123',
                admissionDate: '2023-01-15',
                photo: 'https://via.placeholder.com/150'
            },
            {
                id: 'S1005',
                name: 'Michael Brown',
                dob: '2011-07-18',
                gender: 'Male',
                class: 'Grade 4',
                section: 'A',
                address: '654 Maple Dr, Boroughburg',
                parentName: 'Karen Brown',
                parentContact: '555-234-5678',
                admissionDate: '2022-09-01',
                photo: 'https://via.placeholder.com/150'
            }
        ],
        teachers: [
            {
                id: 'T2001',
                name: 'Robert Johnson',
                subject: 'Math',
                joiningDate: '2018-08-15',
                contact: '555-111-2222',
                address: '123 Educator Lane, Cityville',
                classes: ['Grade 5', 'Grade 4'],
                photo: 'https://via.placeholder.com/150'
            },
            {
                id: 'T2002',
                name: 'Jennifer Williams',
                subject: 'Science',
                joiningDate: '2019-01-10',
                contact: '555-333-4444',
                address: '456 Teacher Street, Townsville',
                classes: ['Grade 3', 'Grade 4'],
                photo: 'https://via.placeholder.com/150'
            },
            {
                id: 'T2003',
                name: 'David Miller',
                subject: 'English',
                joiningDate: '2020-08-20',
                contact: '555-555-6666',
                address: '789 Professor Ave, Villageton',
                classes: ['Grade 5', 'Grade 4', 'Grade 3'],
                photo: 'https://via.placeholder.com/150'
            }
        ],
        courses: [
            {
                code: 'MATH101',
                title: 'Mathematics',
                description: 'Basic arithmetic and algebra',
                teacher: 'T2001',
                duration: 36
            },
            {
                code: 'SCI201',
                title: 'Science',
                description: 'Introduction to biology and physics',
                teacher: 'T2002',
                duration: 32
            },
            {
                code: 'ENG301',
                title: 'English',
                description: 'Language and literature',
                teacher: 'T2003',
                duration: 30
            }
        ],
        classes: [
            {
                name: 'Grade 1',
                section: 'A',
                teacher: 'T2001',
                students: 25
            },
            {
                name: 'Grade 2',
                section: 'A',
                teacher: 'T2002',
                students: 28
            },
            {
                name: 'Grade 3',
                section: 'A',
                teacher: 'T2003',
                students: 22
            },
            {
                name: 'Grade 3',
                section: 'B',
                teacher: 'T2002',
                students: 24
            },
            {
                name: 'Grade 4',
                section: 'A',
                teacher: 'T2001',
                students: 26
            },
            {
                name: 'Grade 5',
                section: 'A',
                teacher: 'T2003',
                students: 30
            }
        ],
        attendance: [
            {
                date: '2023-06-01',
                class: 'Grade 5',
                section: 'A',
                records: [
                    { studentId: 'S1001', status: 'present' },
                    { studentId: 'S1003', status: 'present' }
                ]
            },
            {
                date: '2023-06-01',
                class: 'Grade 4',
                section: 'B',
                records: [
                    { studentId: 'S1002', status: 'present' },
                    { studentId: 'S1005', status: 'absent' }
                ]
            }
        ],
        exams: [
            {
                id: 'EXM001',
                name: 'Mid-Term Exams',
                date: '2023-06-25',
                class: 'All',
                subject: 'All',
                status: 'upcoming'
            },
            {
                id: 'EXM002',
                name: 'Math Quiz',
                date: '2023-05-15',
                class: 'Grade 5',
                subject: 'Math',
                status: 'completed'
            }
        ],
        fees: [
            {
                studentId: 'S1001',
                studentName: 'John Doe',
                class: 'Grade 5',
                feeAmount: 500,
                paidAmount: 500,
                dueAmount: 0,
                paymentDate: '2023-06-01',
                status: 'paid'
            },
            {
                studentId: 'S1002',
                studentName: 'Sarah Smith',
                class: 'Grade 4',
                feeAmount: 500,
                paidAmount: 300,
                dueAmount: 200,
                paymentDate: '2023-06-05',
                status: 'due'
            },
            {
                studentId: 'S1003',
                studentName: 'Alex Johnson',
                class: 'Grade 5',
                feeAmount: 500,
                paidAmount: 500,
                dueAmount: 0,
                paymentDate: '2023-06-10',
                status: 'paid'
            }
        ],
        events: [
            {
                id: 'EVT001',
                title: 'Annual Sports Day',
                type: 'event',
                start: '2023-06-15T09:00:00',
                end: '2023-06-15T15:00:00',
                description: 'Annual sports competition for all classes',
                classes: ['All']
            },
            {
                id: 'EVT002',
                title: 'Parent-Teacher Meeting',
                type: 'meeting',
                start: '2023-06-20T14:00:00',
                end: '2023-06-20T17:00:00',
                description: 'Meeting with parents to discuss student progress',
                classes: ['All']
            }
        ]
    };

    // Initialize data in localStorage if not already present
    if (!localStorage.getItem('smsData')) {
        localStorage.setItem('smsData', JSON.stringify(sampleData));
    }

    // Get data from localStorage
    let smsData = JSON.parse(localStorage.getItem('smsData'));

    // Update dashboard counters
    function updateDashboardCounters() {
        document.getElementById('total-students').textContent = smsData.students.length;
        document.getElementById('total-teachers').textContent = smsData.teachers.length;
        document.getElementById('total-courses').textContent = smsData.courses.length;
        
        const totalFees = smsData.fees.reduce((sum, fee) => sum + fee.paidAmount, 0);
        document.getElementById('fees-collected').textContent = `$${totalFees}`;
    }

    // Initialize attendance chart
    function initAttendanceChart() {
        const ctx = document.getElementById('attendanceChart').getContext('2d');
        
        // Calculate attendance stats
        const presentCount = smsData.attendance.reduce((count, record) => {
            return count + record.records.filter(r => r.status === 'present').length;
        }, 0);
        
        const absentCount = smsData.attendance.reduce((count, record) => {
            return count + record.records.filter(r => r.status === 'absent').length;
        }, 0);
        
        const leaveCount = smsData.attendance.reduce((count, record) => {
            return count + record.records.filter(r => r.status === 'leave').length;
        }, 0);

        const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Present', 'Absent', 'Leave'],
                datasets: [{
                    data: [presentCount, absentCount, leaveCount],
                    backgroundColor: [
                        '#2ecc71',
                        '#e74c3c',
                        '#f39c12'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    // Load recent students
    function loadRecentStudents() {
        const tbody = document.querySelector('#recent-students tbody');
        tbody.innerHTML = '';
        
        // Sort by admission date (newest first)
        const recentStudents = [...smsData.students]
            .sort((a, b) => new Date(b.admissionDate) - new Date(a.admissionDate))
            .slice(0, 5);
        
        recentStudents.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.class} ${student.section}</td>
                <td>${student.admissionDate}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Panel navigation
    const menuItems = document.querySelectorAll('.menu li');
    const panels = document.querySelectorAll('.panel');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const panelId = item.getAttribute('data-panel');
            
            // Update active menu item
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Show selected panel
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.id === panelId) {
                    panel.classList.add('active');
                    
                    // Load panel-specific data
                    switch(panelId) {
                        case 'students':
                            loadStudentsTable();
                            break;
                        case 'teachers':
                            loadTeachersTable();
                            break;
                        case 'courses':
                            loadCoursesTable();
                            break;
                        case 'classes':
                            loadClassesTable();
                            break;
                        case 'attendance':
                            loadAttendanceTable();
                            break;
                        case 'exams':
                            loadExamsTable();
                            break;
                        case 'fees':
                            loadFeesTable();
                            break;
                        case 'calendar':
                            initCalendar();
                            break;
                    }
                }
            });
        });
    });

    // Students Panel
    function loadStudentsTable(filterClass = '') {
        const tbody = document.querySelector('#students-table-body');
        tbody.innerHTML = '';
        
        const filteredStudents = filterClass 
            ? smsData.students.filter(s => s.class === filterClass)
            : smsData.students;
        
        filteredStudents.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.class} ${student.section}</td>
                <td>${student.parentContact}</td>
                <td>${student.admissionDate}</td>
                <td>
                    <button class="btn btn-sm btn-secondary view-student" data-id="${student.id}">View</button>
                    <button class="btn btn-sm btn-primary edit-student" data-id="${student.id}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-student" data-id="${student.id}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Add event listeners to buttons
        addStudentEventListeners();
    }

    function addStudentEventListeners() {
        // View student
        document.querySelectorAll('.view-student').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.target.getAttribute('data-id');
                viewStudent(studentId);
            });
        });
        
        // Edit student
        document.querySelectorAll('.edit-student').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.target.getAttribute('data-id');
                editStudent(studentId);
            });
        });
        
        // Delete student
        document.querySelectorAll('.delete-student').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.target.getAttribute('data-id');
                deleteStudent(studentId);
            });
        });
    }

    function viewStudent(studentId) {
        const student = smsData.students.find(s => s.id === studentId);
        if (!student) return;
        
        document.getElementById('modal-title').textContent = 'Student Details';
        document.getElementById('modal-body').innerHTML = `
            <div class="student-details">
                <div class="student-photo">
                    <img src="${student.photo}" alt="${student.name}">
                </div>
                <div class="student-info">
                    <p><strong>Student ID:</strong> ${student.id}</p>
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Date of Birth:</strong> ${student.dob}</p>
                    <p><strong>Gender:</strong> ${student.gender}</p>
                    <p><strong>Class/Section:</strong> ${student.class} ${student.section}</p>
                    <p><strong>Address:</strong> ${student.address}</p>
                    <p><strong>Parent/Guardian:</strong> ${student.parentName}</p>
                    <p><strong>Contact:</strong> ${student.parentContact}</p>
                    <p><strong>Admission Date:</strong> ${student.admissionDate}</p>
                </div>
            </div>
        `;
        
        document.getElementById('view-modal').style.display = 'flex';
    }

    function editStudent(studentId) {
        const student = smsData.students.find(s => s.id === studentId);
        if (!student) return;
        
        // Fill the form with student data
        document.getElementById('student-name').value = student.name;
        document.getElementById('student-dob').value = student.dob;
        document.getElementById('student-gender').value = student.gender;
        document.getElementById('student-class').value = student.class;
        document.getElementById('student-section').value = student.section;
        document.getElementById('student-address').value = student.address;
        document.getElementById('parent-name').value = student.parentName;
        document.getElementById('parent-contact').value = student.parentContact;
        document.getElementById('admission-date').value = student.admissionDate;
        
        // Set the form to edit mode
        document.getElementById('student-form').setAttribute('data-edit-id', studentId);
        
        // Show the form and hide the table
        document.getElementById('view-students').style.display = 'none';
        document.getElementById('add-student-form').style.display = 'block';
    }

    function deleteStudent(studentId) {
        if (confirm('Are you sure you want to delete this student?')) {
            smsData.students = smsData.students.filter(s => s.id !== studentId);
            saveData();
            loadStudentsTable();
            updateDashboardCounters();
        }
    }

    // Student form handling
    document.getElementById('add-student-btn').addEventListener('click', () => {
        document.getElementById('view-students').style.display = 'none';
        document.getElementById('add-student-form').style.display = 'block';
        document.getElementById('student-form').reset();
        document.getElementById('student-form').removeAttribute('data-edit-id');
    });

    document.getElementById('cancel-student-btn').addEventListener('click', () => {
        document.getElementById('view-students').style.display = 'block';
        document.getElementById('add-student-form').style.display = 'none';
    });

    document.getElementById('student-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isEdit = document.getElementById('student-form').hasAttribute('data-edit-id');
        const studentId = isEdit 
            ? document.getElementById('student-form').getAttribute('data-edit-id')
            : 'S' + (1000 + smsData.students.length + 1);
        
        const student = {
            id: studentId,
            name: document.getElementById('student-name').value,
            dob: document.getElementById('student-dob').value,
            gender: document.getElementById('student-gender').value,
            class: document.getElementById('student-class').value,
            section: document.getElementById('student-section').value,
            address: document.getElementById('student-address').value,
            parentName: document.getElementById('parent-name').value,
            parentContact: document.getElementById('parent-contact').value,
            admissionDate: document.getElementById('admission-date').value,
            photo: 'https://via.placeholder.com/150'
        };
        
        if (isEdit) {
            // Update existing student
            const index = smsData.students.findIndex(s => s.id === studentId);
            if (index !== -1) {
                smsData.students[index] = student;
            }
        } else {
            // Add new student
            smsData.students.push(student);
        }
        
        saveData();
        loadStudentsTable();
        updateDashboardCounters();
        
        // Return to table view
        document.getElementById('view-students').style.display = 'block';
        document.getElementById('add-student-form').style.display = 'none';
    });

    // Student search and filter
    document.getElementById('student-search').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredStudents = smsData.students.filter(s => 
            s.name.toLowerCase().includes(searchTerm) || 
            s.id.toLowerCase().includes(searchTerm)
        );
        
        const tbody = document.querySelector('#students-table-body');
        tbody.innerHTML = '';
        
        filteredStudents.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.class} ${student.section}</td>
                <td>${student.parentContact}</td>
                <td>${student.admissionDate}</td>
                <td>
                    <button class="btn btn-sm btn-secondary view-student" data-id="${student.id}">View</button>
                    <button class="btn btn-sm btn-primary edit-student" data-id="${student.id}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-student" data-id="${student.id}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        addStudentEventListeners();
    });

    document.getElementById('student-class-filter').addEventListener('change', (e) => {
        loadStudentsTable(e.target.value);
    });

    // Teachers Panel
    function loadTeachersTable(filterSubject = '') {
        const tbody = document.querySelector('#teachers-table-body');
        tbody.innerHTML = '';
        
        const filteredTeachers = filterSubject 
            ? smsData.teachers.filter(t => t.subject === filterSubject)
            : smsData.teachers;
        
        filteredTeachers.forEach(teacher => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${teacher.id}</td>
                <td>${teacher.name}</td>
                <td>${teacher.subject}</td>
                <td>${teacher.contact}</td>
                <td>${teacher.classes.join(', ')}</td>
                <td>
                    <button class="btn btn-sm btn-secondary view-teacher" data-id="${teacher.id}">View</button>
                    <button class="btn btn-sm btn-primary edit-teacher" data-id="${teacher.id}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-teacher" data-id="${teacher.id}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Add event listeners to buttons
        addTeacherEventListeners();
    }

    function addTeacherEventListeners() {
        // View teacher
        document.querySelectorAll('.view-teacher').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const teacherId = e.target.getAttribute('data-id');
                viewTeacher(teacherId);
            });
        });
        
        // Edit teacher
        document.querySelectorAll('.edit-teacher').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const teacherId = e.target.getAttribute('data-id');
                editTeacher(teacherId);
            });
        });
        
        // Delete teacher
        document.querySelectorAll('.delete-teacher').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const teacherId = e.target.getAttribute('data-id');
                deleteTeacher(teacherId);
            });
        });
    }

    function viewTeacher(teacherId) {
        const teacher = smsData.teachers.find(t => t.id === teacherId);
        if (!teacher) return;
        
        document.getElementById('modal-title').textContent = 'Teacher Details';
        document.getElementById('modal-body').innerHTML = `
            <div class="teacher-details">
                <div class="teacher-photo">
                    <img src="${teacher.photo}" alt="${teacher.name}">
                </div>
                <div class="teacher-info">
                    <p><strong>Teacher ID:</strong> ${teacher.id}</p>
                    <p><strong>Name:</strong> ${teacher.name}</p>
                    <p><strong>Subject:</strong> ${teacher.subject}</p>
                    <p><strong>Date of Joining:</strong> ${teacher.joiningDate}</p>
                    <p><strong>Contact:</strong> ${teacher.contact}</p>
                    <p><strong>Address:</strong> ${teacher.address}</p>
                    <p><strong>Assigned Classes:</strong> ${teacher.classes.join(', ')}</p>
                </div>
            </div>
        `;
        
        document.getElementById('view-modal').style.display = 'flex';
    }

    function editTeacher(teacherId) {
        const teacher = smsData.teachers.find(t => t.id === teacherId);
        if (!teacher) return;
        
        // Fill the form with teacher data
        document.getElementById('teacher-name').value = teacher.name;
        document.getElementById('teacher-subject').value = teacher.subject;
        document.getElementById('teacher-joining').value = teacher.joiningDate;
        document.getElementById('teacher-contact').value = teacher.contact;
        document.getElementById('teacher-address').value = teacher.address;
        
        // Set assigned classes
        const classSelect = document.getElementById('teacher-classes');
        Array.from(classSelect.options).forEach(option => {
            option.selected = teacher.classes.includes(option.value);
        });
        
        // Set the form to edit mode
        document.getElementById('teacher-form').setAttribute('data-edit-id', teacherId);
        
        // Show the form and hide the table
        document.getElementById('view-teachers').style.display = 'none';
        document.getElementById('add-teacher-form').style.display = 'block';
    }

    function deleteTeacher(teacherId) {
        if (confirm('Are you sure you want to delete this teacher?')) {
            smsData.teachers = smsData.teachers.filter(t => t.id !== teacherId);
            saveData();
            loadTeachersTable();
            updateDashboardCounters();
        }
    }

    // Teacher form handling
    document.getElementById('add-teacher-btn').addEventListener('click', () => {
        document.getElementById('view-teachers').style.display = 'none';
        document.getElementById('add-teacher-form').style.display = 'block';
        document.getElementById('teacher-form').reset();
        document.getElementById('teacher-form').removeAttribute('data-edit-id');
    });

    document.getElementById('cancel-teacher-btn').addEventListener('click', () => {
        document.getElementById('view-teachers').style.display = 'block';
        document.getElementById('add-teacher-form').style.display = 'none';
    });

    document.getElementById('teacher-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isEdit = document.getElementById('teacher-form').hasAttribute('data-edit-id');
        const teacherId = isEdit 
            ? document.getElementById('teacher-form').getAttribute('data-edit-id')
            : 'T' + (2000 + smsData.teachers.length + 1);
        
        // Get selected classes
        const classSelect = document.getElementById('teacher-classes');
        const selectedClasses = Array.from(classSelect.selectedOptions).map(option => option.value);
        
        const teacher = {
            id: teacherId,
            name: document.getElementById('teacher-name').value,
            subject: document.getElementById('teacher-subject').value,
            joiningDate: document.getElementById('teacher-joining').value,
            contact: document.getElementById('teacher-contact').value,
            address: document.getElementById('teacher-address').value,
            classes: selectedClasses,
            photo: 'https://via.placeholder.com/150'
        };
        
        if (isEdit) {
            // Update existing teacher
            const index = smsData.teachers.findIndex(t => t.id === teacherId);
            if (index !== -1) {
                smsData.teachers[index] = teacher;
            }
        } else {
            // Add new teacher
            smsData.teachers.push(teacher);
        }
        
        saveData();
        loadTeachersTable();
        updateDashboardCounters();
        
        // Return to table view
        document.getElementById('view-teachers').style.display = 'block';
        document.getElementById('add-teacher-form').style.display = 'none';
    });

    // Teacher search and filter
    document.getElementById('teacher-search').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTeachers = smsData.teachers.filter(t => 
            t.name.toLowerCase().includes(searchTerm) || 
            t.id.toLowerCase().includes(searchTerm)
        );
        
        const tbody = document.querySelector('#teachers-table-body');
        tbody.innerHTML = '';
        
        filteredTeachers.forEach(teacher => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${teacher.id}</td>
                <td>${teacher.name}</td>
                <td>${teacher.subject}</td>
                <td>${teacher.contact}</td>
                <td>${teacher.classes.join(', ')}</td>
                <td>
                    <button class="btn btn-sm btn-secondary view-teacher" data-id="${teacher.id}">View</button>
                    <button class="btn btn-sm btn-primary edit-teacher" data-id="${teacher.id}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-teacher" data-id="${teacher.id}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        addTeacherEventListeners();
    });

    document.getElementById('teacher-subject-filter').addEventListener('change', (e) => {
        loadTeachersTable(e.target.value);
    });

    // Courses Panel
    function loadCoursesTable() {
        const tbody = document.querySelector('#courses-table-body');
        tbody.innerHTML = '';
        
        smsData.courses.forEach(course => {
            const teacher = smsData.teachers.find(t => t.id === course.teacher);
            const teacherName = teacher ? teacher.name : 'Not assigned';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.code}</td>
                <td>${course.title}</td>
                <td>${course.description}</td>
                <td>${teacherName}</td>
                <td>${course.duration} weeks</td>
                <td>
                    <button class="btn btn-sm btn-secondary view-course" data-code="${course.code}">View</button>
                    <button class="btn btn-sm btn-primary edit-course" data-code="${course.code}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-course" data-code="${course.code}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Add event listeners to buttons
        addCourseEventListeners();
    }

    function addCourseEventListeners() {
        // View course
        document.querySelectorAll('.view-course').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const courseCode = e.target.getAttribute('data-code');
                viewCourse(courseCode);
            });
        });
        
        // Edit course
        document.querySelectorAll('.edit-course').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const courseCode = e.target.getAttribute('data-code');
                editCourse(courseCode);
            });
        });
        
        // Delete course
        document.querySelectorAll('.delete-course').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const courseCode = e.target.getAttribute('data-code');
                deleteCourse(courseCode);
            });
        });
    }

    function viewCourse(courseCode) {
        const course = smsData.courses.find(c => c.code === courseCode);
        if (!course) return;
        
        const teacher = smsData.teachers.find(t => t.id === course.teacher);
        const teacherName = teacher ? teacher.name : 'Not assigned';
        
        document.getElementById('modal-title').textContent = 'Course Details';
        document.getElementById('modal-body').innerHTML = `
            <div class="course-details">
                <p><strong>Course Code:</strong> ${course.code}</p>
                <p><strong>Title:</strong> ${course.title}</p>
                <p><strong>Description:</strong> ${course.description}</p>
                <p><strong>Assigned Teacher:</strong> ${teacherName}</p>
                <p><strong>Duration:</strong> ${course.duration} weeks</p>
            </div>
        `;
        
        document.getElementById('view-modal').style.display = 'flex';
    }

    function editCourse(courseCode) {
        const course = smsData.courses.find(c => c.code === courseCode);
        if (!course) return;
        
        // Fill the form with course data
        document.getElementById('course-title').value = course.title;
        document.getElementById('course-code').value = course.code;
        document.getElementById('course-description').value = course.description;
        document.getElementById('course-teacher').value = course.teacher;
        document.getElementById('course-duration').value = course.duration;
        
        // Set the form to edit mode
        document.getElementById('course-form').setAttribute('data-edit-code', courseCode);
        
        // Show the form and hide the table
        document.getElementById('view-courses').style.display = 'none';
        document.getElementById('add-course-form').style.display = 'block';
    }

    function deleteCourse(courseCode) {
        if (confirm('Are you sure you want to delete this course?')) {
            smsData.courses = smsData.courses.filter(c => c.code !== courseCode);
            saveData();
            loadCoursesTable();
            updateDashboardCounters();
        }
    }

    // Course form handling
    document.getElementById('add-course-btn').addEventListener('click', () => {
        document.getElementById('view-courses').style.display = 'none';
        document.getElementById('add-course-form').style.display = 'block';
        document.getElementById('course-form').reset();
        document.getElementById('course-form').removeAttribute('data-edit-code');
        
        // Populate teacher dropdown
        const teacherSelect = document.getElementById('course-teacher');
        teacherSelect.innerHTML = '<option value="">Select Teacher</option>';
        smsData.teachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher.id;
            option.textContent = teacher.name;
            teacherSelect.appendChild(option);
        });
    });

    document.getElementById('cancel-course-btn').addEventListener('click', () => {
        document.getElementById('view-courses').style.display = 'block';
        document.getElementById('add-course-form').style.display = 'none';
    });

    document.getElementById('course-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isEdit = document.getElementById('course-form').hasAttribute('data-edit-code');
        const courseCode = isEdit 
            ? document.getElementById('course-form').getAttribute('data-edit-code')
            : document.getElementById('course-code').value;
        
        const course = {
            code: courseCode,
            title: document.getElementById('course-title').value,
            description: document.getElementById('course-description').value,
            teacher: document.getElementById('course-teacher').value,
            duration: document.getElementById('course-duration').value
        };
        
        if (isEdit) {
            // Update existing course
            const index = smsData.courses.findIndex(c => c.code === courseCode);
            if (index !== -1) {
                smsData.courses[index] = course;
            }
        } else {
            // Add new course
            smsData.courses.push(course);
        }
        
        saveData();
        loadCoursesTable();
        updateDashboardCounters();
        
        // Return to table view
        document.getElementById('view-courses').style.display = 'block';
        document.getElementById('add-course-form').style.display = 'none';
    });

    // Course search
    document.getElementById('course-search').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCourses = smsData.courses.filter(c => 
            c.title.toLowerCase().includes(searchTerm) || 
            c.code.toLowerCase().includes(searchTerm)
        );
        
        const tbody = document.querySelector('#courses-table-body');
        tbody.innerHTML = '';
        
        filteredCourses.forEach(course => {
            const teacher = smsData.teachers.find(t => t.id === course.teacher);
            const teacherName = teacher ? teacher.name : 'Not assigned';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.code}</td>
                <td>${course.title}</td>
                <td>${course.description}</td>
                <td>${teacherName}</td>
                <td>${course.duration} weeks</td>
                <td>
                    <button class="btn btn-sm btn-secondary view-course" data-code="${course.code}">View</button>
                    <button class="btn btn-sm btn-primary edit-course" data-code="${course.code}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-course" data-code="${course.code}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        addCourseEventListeners();
    });

    // Classes Panel
    function loadClassesTable() {
        const tbody = document.querySelector('#classes-table-body');
        tbody.innerHTML = '';
        
        smsData.classes.forEach(cls => {
            const teacher = smsData.teachers.find(t => t.id === cls.teacher);
            const teacherName = teacher ? teacher.name : 'Not assigned';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cls.name}</td>
                <td>${cls.section}</td>
                <td>${teacherName}</td>
                <td>${cls.students}</td>
                <td>
                    <button class="btn btn-sm btn-secondary view-class" data-name="${cls.name}" data-section="${cls.section}">View</button>
                    <button class="btn btn-sm btn-primary edit-class" data-name="${cls.name}" data-section="${cls.section}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-class" data-name="${cls.name}" data-section="${cls.section}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Add event listeners to buttons
        addClassEventListeners();
    }

    function addClassEventListeners() {
        // View class
        document.querySelectorAll('.view-class').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const className = e.target.getAttribute('data-name');
                const section = e.target.getAttribute('data-section');
                viewClass(className, section);
            });
        });
        
        // Edit class
        document.querySelectorAll('.edit-class').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const className = e.target.getAttribute('data-name');
                const section = e.target.getAttribute('data-section');
                editClass(className, section);
            });
        });
        
        // Delete class
        document.querySelectorAll('.delete-class').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const className = e.target.getAttribute('data-name');
                const section = e.target.getAttribute('data-section');
                deleteClass(className, section);
            });
        });
    }

    function viewClass(className, section) {
        const cls = smsData.classes.find(c => c.name === className && c.section === section);
        if (!cls) return;
        
        const teacher = smsData.teachers.find(t => t.id === cls.teacher);
        const teacherName = teacher ? teacher.name : 'Not assigned';
        
        // Get students in this class
        const students = smsData.students.filter(s => s.class === className && s.section === section);
        
        document.getElementById('modal-title').textContent = 'Class Details';
        document.getElementById('modal-body').innerHTML = `
            <div class="class-details">
                <p><strong>Class:</strong> ${className} ${section}</p>
                <p><strong>Assigned Teacher:</strong> ${teacherName}</p>
                <p><strong>Total Students:</strong> ${cls.students}</p>
                
                <h4>Students</h4>
                <table class="student-list">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Admission Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${students.map(s => `
                            <tr>
                                <td>${s.id}</td>
                                <td>${s.name}</td>
                                <td>${s.admissionDate}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        document.getElementById('view-modal').style.display = 'flex';
    }

    function editClass(className, section) {
        const cls = smsData.classes.find(c => c.name === className && c.section === section);
        if (!cls) return;
        
        // Fill the form with class data
        document.getElementById('class-name').value = cls.name;
        document.getElementById('class-section').value = cls.section;
        document.getElementById('class-teacher').value = cls.teacher;
        
        // Set the form to edit mode
        document.getElementById('class-form').setAttribute('data-edit-name', className);
        document.getElementById('class-form').setAttribute('data-edit-section', section);
        
        // Show the form and hide the table
        document.getElementById('view-classes').style.display = 'none';
        document.getElementById('add-class-form').style.display = 'block';
        
        // Populate teacher dropdown
        const teacherSelect = document.getElementById('class-teacher');
        teacherSelect.innerHTML = '<option value="">Select Teacher</option>';
        smsData.teachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher.id;
            option.textContent = teacher.name;
            teacherSelect.appendChild(option);
        });
        
        // Set selected teacher
        teacherSelect.value = cls.teacher;
    }

    function deleteClass(className, section) {
        if (confirm('Are you sure you want to delete this class?')) {
            smsData.classes = smsData.classes.filter(c => !(c.name === className && c.section === section));
            saveData();
            loadClassesTable();
            updateDashboardCounters();
        }
    }

    // Class form handling
    document.getElementById('add-class-btn').addEventListener('click', () => {
        document.getElementById('view-classes').style.display = 'none';
        document.getElementById('add-class-form').style.display = 'block';
        document.getElementById('class-form').reset();
        document.getElementById('class-form').removeAttribute('data-edit-name');
        document.getElementById('class-form').removeAttribute('data-edit-section');
        
        // Populate teacher dropdown
        const teacherSelect = document.getElementById('class-teacher');
        teacherSelect.innerHTML = '<option value="">Select Teacher</option>';
        smsData.teachers.forEach(teacher => {
            const option = document.createElement('option');
            option.value = teacher.id;
            option.textContent = teacher.name;
            teacherSelect.appendChild(option);
        });
    });

    document.getElementById('cancel-class-btn').addEventListener('click', () => {
        document.getElementById('view-classes').style.display = 'block';
        document.getElementById('add-class-form').style.display = 'none';
    });

    document.getElementById('class-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isEdit = document.getElementById('class-form').hasAttribute('data-edit-name');
        const className = document.getElementById('class-name').value;
        const section = document.getElementById('class-section').value;
        
        // Count students in this class
        const studentsCount = smsData.students.filter(s => 
            s.class === className && s.section === section
        ).length;
        
        const cls = {
            name: className,
            section: section,
            teacher: document.getElementById('class-teacher').value,
            students: studentsCount
        };
        
        if (isEdit) {
            // Update existing class
            const oldName = document.getElementById('class-form').getAttribute('data-edit-name');
            const oldSection = document.getElementById('class-form').getAttribute('data-edit-section');
            
            const index = smsData.classes.findIndex(c => 
                c.name === oldName && c.section === oldSection
            );
            
            if (index !== -1) {
                smsData.classes[index] = cls;
                
                // Update students' class information if class name changed
                if (oldName !== className || oldSection !== section) {
                    smsData.students.forEach(student => {
                        if (student.class === oldName && student.section === oldSection) {
                            student.class = className;
                            student.section = section;
                        }
                    });
                }
            }
        } else {
            // Add new class
            smsData.classes.push(cls);
        }
        
        saveData();
        loadClassesTable();
        updateDashboardCounters();
        
        // Return to table view
        document.getElementById('view-classes').style.display = 'block';
        document.getElementById('add-class-form').style.display = 'none';
    });

    // Attendance Panel
    function loadAttendanceTable(filterClass = '', filterDate = '') {
        const tbody = document.querySelector('#attendance-table-body');
        tbody.innerHTML = '';
        
        let filteredAttendance = [...smsData.attendance];
        
        if (filterClass) {
            filteredAttendance = filteredAttendance.filter(a => a.class === filterClass);
        }
        
        if (filterDate) {
            filteredAttendance = filteredAttendance.filter(a => a.date === filterDate);
        }
        
        filteredAttendance.forEach(record => {
            const presentCount = record.records.filter(r => r.status === 'present').length;
            const absentCount = record.records.filter(r => r.status === 'absent').length;
            const leaveCount = record.records.filter(r => r.status === 'leave').length;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.date}</td>
                <td>${record.class}</td>
                <td>${record.section}</td>
                <td>${presentCount}</td>
                <td>${absentCount}</td>
                <td>${leaveCount}</td>
                <td>
                    <button class="btn btn-sm btn-secondary view-attendance-record" 
                            data-date="${record.date}" 
                            data-class="${record.class}" 
                            data-section="${record.section}">
                        View
                    </button>
                    <button class="btn btn-sm btn-danger delete-attendance-record" 
                            data-date="${record.date}" 
                            data-class="${record.class}" 
                            data-section="${record.section}">
                        Delete
                    </button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Add event listeners to buttons
        addAttendanceEventListeners();
    }

    function addAttendanceEventListeners() {
        // View attendance record
        document.querySelectorAll('.view-attendance-record').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const date = e.target.getAttribute('data-date');
                const className = e.target.getAttribute('data-class');
                const section = e.target.getAttribute('data-section');
                viewAttendanceRecord(date, className, section);
            });
        });
        
        // Delete attendance record
        document.querySelectorAll('.delete-attendance-record').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const date = e.target.getAttribute('data-date');
                const className = e.target.getAttribute('data-class');
                const section = e.target.getAttribute('data-section');
                deleteAttendanceRecord(date, className, section);
            });
        });
    }

    function viewAttendanceRecord(date, className, section) {
        const record = smsData.attendance.find(a => 
            a.date === date && a.class === className && a.section === section
        );
        
        if (!record) return;
        
        document.getElementById('modal-title').textContent = 'Attendance Record';
        document.getElementById('modal-body').innerHTML = `
            <div class="attendance-details">
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Class:</strong> ${className} ${section}</p>
                
                <table class="attendance-list">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${record.records.map(r => {
                            const student = smsData.students.find(s => s.id === r.studentId);
                            const studentName = student ? student.name : 'Unknown';
                            return `
                                <tr>
                                    <td>${r.studentId}</td>
                                    <td>${studentName}</td>
                                    <td>
                                        <span class="status ${r.status === 'present' ? 'active' : 
                                            r.status === 'absent' ? 'inactive' : 'pending'}">
                                            ${r.status.charAt(0).toUpperCase() + r.status.slice(1)}
                                        </span>
                                    </td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        document.getElementById('view-modal').style.display = 'flex';
    }

    function deleteAttendanceRecord(date, className, section) {
        if (confirm('Are you sure you want to delete this attendance record?')) {
            smsData.attendance = smsData.attendance.filter(a => 
                !(a.date === date && a.class === className && a.section === section)
            );
            saveData();
            loadAttendanceTable();
        }
    }

    // Mark attendance form handling
    document.getElementById('mark-attendance-btn').addEventListener('click', () => {
        document.getElementById('view-attendance').style.display = 'none';
        document.getElementById('mark-attendance').style.display = 'block';
        document.getElementById('attendance-form').reset();
    });

    document.getElementById('cancel-attendance-btn').addEventListener('click', () => {
        document.getElementById('view-attendance').style.display = 'block';
        document.getElementById('mark-attendance').style.display = 'none';
    });

    document.getElementById('attendance-class').addEventListener('change', loadStudentsForAttendance);
    document.getElementById('attendance-section').addEventListener('change', loadStudentsForAttendance);

    function loadStudentsForAttendance() {
        const className = document.getElementById('attendance-class').value;
        const section = document.getElementById('attendance-section').value;
        
        if (!className || !section) return;
        
        const students = smsData.students.filter(s => 
            s.class === className && s.section === section
        );
        
        const tbody = document.querySelector('#attendance-marking-table tbody');
        tbody.innerHTML = '';
        
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>
                    <div class="attendance-status">
                        <label>
                            <input type="radio" name="attendance-${student.id}" value="present" checked> Present
                        </label>
                        <label>
                            <input type="radio" name="attendance-${student.id}" value="absent"> Absent
                        </label>
                        <label>
                            <input type="radio" name="attendance-${student.id}" value="leave"> Leave
                        </label>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    document.getElementById('attendance-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const className = document.getElementById('attendance-class').value;
        const section = document.getElementById('attendance-section').value;
        const date = document.getElementById('attendance-date').value;
        
        if (!className || !section || !date) {
            alert('Please fill all required fields');
            return;
        }
        
        // Get attendance records
        const records = [];
        const students = smsData.students.filter(s => 
            s.class === className && s.section === section
        );
        
        students.forEach(student => {
            const status = document.querySelector(`input[name="attendance-${student.id}"]:checked`).value;
            records.push({
                studentId: student.id,
                status: status
            });
        });
        
        // Check if attendance for this class/date already exists
        const existingIndex = smsData.attendance.findIndex(a => 
            a.date === date && a.class === className && a.section === section
        );
        
        if (existingIndex !== -1) {
            // Update existing record
            smsData.attendance[existingIndex].records = records;
        } else {
            // Add new record
            smsData.attendance.push({
                date: date,
                class: className,
                section: section,
                records: records
            });
        }
        
        saveData();
        loadAttendanceTable();
        
        // Return to table view
        document.getElementById('view-attendance').style.display = 'block';
        document.getElementById('mark-attendance').style.display = 'none';
    });

    // Attendance search and filter
    document.getElementById('attendance-class-filter').addEventListener('change', (e) => {
        loadAttendanceTable(e.target.value, document.getElementById('attendance-date-filter').value);
    });

    document.getElementById('attendance-date-filter').addEventListener('change', (e) => {
        loadAttendanceTable(document.getElementById('attendance-class-filter').value, e.target.value);
    });

    // Exams Panel
    function loadExamsTable(filterClass = '', filterStatus = '') {
        const tbody = document.querySelector('#exams-table-body');
        tbody.innerHTML = '';
        
        let filteredExams = [...smsData.exams];
        
        if (filterClass && filterClass !== 'All') {
            filteredExams = filteredExams.filter(e => e.class === filterClass);
        }
        
        if (filterStatus) {
            const today = new Date().toISOString().split('T')[0];
            if (filterStatus === 'upcoming') {
                filteredExams = filteredExams.filter(e => e.date >= today);
            } else if (filterStatus === 'completed') {
                filteredExams = filteredExams.filter(e => e.date < today);
            }
        }
        
        filteredExams.forEach(exam => {
            const today = new Date().toISOString().split('T')[0];
            const status = exam.date >= today ? 'Upcoming' : 'Completed';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${exam.name}</td>
                <td>${exam.date}</td>
                <td>${exam.class}</td>
                <td>${exam.subject}</td>
                <td><span class="status ${status.toLowerCase()}">${status}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary view-exam" data-id="${exam.id}">View</button>
                    <button class="btn btn-sm btn-primary edit-exam" data-id="${exam.id}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-exam" data-id="${exam.id}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Add event listeners to buttons
        addExamEventListeners();
    }

    function addExamEventListeners() {
        // View exam
        document.querySelectorAll('.view-exam').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const examId = e.target.getAttribute('data-id');
                viewExam(examId);
            });
        });
        
        // Edit exam
        document.querySelectorAll('.edit-exam').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const examId = e.target.getAttribute('data-id');
                editExam(examId);
            });
        });
        
        // Delete exam
        document.querySelectorAll('.delete-exam').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const examId = e.target.getAttribute('data-id');
                deleteExam(examId);
            });
        });
    }

    function viewExam(examId) {
        const exam = smsData.exams.find(e => e.id === examId);
        if (!exam) return;
        
        document.getElementById('modal-title').textContent = 'Exam Details';
        document.getElementById('modal-body').innerHTML = `
            <div class="exam-details">
                <p><strong>Exam ID:</strong> ${exam.id}</p>
                <p><strong>Name:</strong> ${exam.name}</p>
                <p><strong>Date:</strong> ${exam.date}</p>
                <p><strong>Class:</strong> ${exam.class}</p>
                <p><strong>Subject:</strong> ${exam.subject}</p>
            </div>
        `;
        
        document.getElementById('view-modal').style.display = 'flex';
    }

    function editExam(examId) {
        // This would be similar to other edit functions
        // Implementation would depend on your exam form structure
    }

    function deleteExam(examId) {
        if (confirm('Are you sure you want to delete this exam?')) {
            smsData.exams = smsData.exams.filter(e => e.id !== examId);
            saveData();
            loadExamsTable();
        }
    }

    // Exam search and filter
    document.getElementById('exam-class-filter').addEventListener('change', (e) => {
        loadExamsTable(e.target.value, document.getElementById('exam-status-filter').value);
    });

    document.getElementById('exam-status-filter').addEventListener('change', (e) => {
        loadExamsTable(document.getElementById('exam-class-filter').value, e.target.value);
    });

    // Results section
    document.getElementById('result-class-select').addEventListener('change', (e) => {
        const className = e.target.value;
        const examSelect = document.getElementById('result-exam-select');
        examSelect.innerHTML = '<option value="">Select Exam</option>';
        
        if (className) {
            // Filter exams for this class
            const exams = smsData.exams.filter(e => 
                e.class === className || e.class === 'All'
            );
            
            exams.forEach(exam => {
                const option = document.createElement('option');
                option.value = exam.id;
                option.textContent = `${exam.name} (${exam.date})`;
                examSelect.appendChild(option);
            });
        }
    });

    document.getElementById('view-results-btn').addEventListener('click', () => {
        const classId = document.getElementById('result-class-select').value;
        const examId = document.getElementById('result-exam-select').value;
        
        if (!classId || !examId) {
            alert('Please select both class and exam');
            return;
        }
        
        // In a real system, you would load actual results here
        // For demo, we'll show a message
        document.getElementById('results-container').innerHTML = `
            <p>Results for selected class and exam would be displayed here.</p>
            <p>In a complete system, this would show student marks and grades.</p>
        `;
    });

    // Fee Management Panel
    function loadFeesTable(filterStatus = '') {
        const tbody = document.querySelector('#fees-table-body');
        tbody.innerHTML = '';
        
        const filteredFees = filterStatus 
            ? smsData.fees.filter(f => f.status === filterStatus)
            : smsData.fees;
        
        filteredFees.forEach(fee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${fee.studentId}</td>
                <td>${fee.studentName}</td>
                <td>${fee.class}</td>
                <td>$${fee.feeAmount.toFixed(2)}</td>
                <td>$${fee.paidAmount.toFixed(2)}</td>
                <td>$${fee.dueAmount.toFixed(2)}</td>
                <td>${fee.paymentDate}</td>
                <td><span class="status ${fee.status}">${fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary view-fee" data-id="${fee.studentId}" data-date="${fee.paymentDate}">View</button>
                    <button class="btn btn-sm btn-primary edit-fee" data-id="${fee.studentId}" data-date="${fee.paymentDate}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-fee" data-id="${fee.studentId}" data-date="${fee.paymentDate}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Add event listeners to buttons
        addFeeEventListeners();
    }

    function addFeeEventListeners() {
        // View fee
        document.querySelectorAll('.view-fee').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.target.getAttribute('data-id');
                const paymentDate = e.target.getAttribute('data-date');
                viewFee(studentId, paymentDate);
            });
        });
        
        // Edit fee
        document.querySelectorAll('.edit-fee').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.target.getAttribute('data-id');
                const paymentDate = e.target.getAttribute('data-date');
                editFee(studentId, paymentDate);
            });
        });
        
        // Delete fee
        document.querySelectorAll('.delete-fee').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const studentId = e.target.getAttribute('data-id');
                const paymentDate = e.target.getAttribute('data-date');
                deleteFee(studentId, paymentDate);
            });
        });
    }

    function viewFee(studentId, paymentDate) {
        const fee = smsData.fees.find(f => 
            f.studentId === studentId && f.paymentDate === paymentDate
        );
        
        if (!fee) return;
        
        document.getElementById('modal-title').textContent = 'Fee Payment Details';
        document.getElementById('modal-body').innerHTML = `
            <div class="fee-details">
                <p><strong>Student ID:</strong> ${fee.studentId}</p>
                <p><strong>Student Name:</strong> ${fee.studentName}</p>
                <p><strong>Class:</strong> ${fee.class}</p>
                <p><strong>Fee Amount:</strong> $${fee.feeAmount.toFixed(2)}</p>
                <p><strong>Paid Amount:</strong> $${fee.paidAmount.toFixed(2)}</p>
                <p><strong>Due Amount:</strong> $${fee.dueAmount.toFixed(2)}</p>
                <p><strong>Payment Date:</strong> ${fee.paymentDate}</p>
                <p><strong>Status:</strong> <span class="status ${fee.status}">${fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}</span></p>
                ${fee.description ? `<p><strong>Description:</strong> ${fee.description}</p>` : ''}
            </div>
        `;
        
        document.getElementById('view-modal').style.display = 'flex';
    }

    function editFee(studentId, paymentDate) {
        const fee = smsData.fees.find(f => 
            f.studentId === studentId && f.paymentDate === paymentDate
        );
        
        if (!fee) return;
        
        // Fill the form with fee data
        document.getElementById('fee-student').value = fee.studentId;
        document.getElementById('fee-amount').value = fee.feeAmount;
        document.getElementById('fee-paid').value = fee.paidAmount;
        document.getElementById('fee-date').value = fee.paymentDate;
        document.getElementById('fee-description').value = fee.description || '';
        
        // Set the form to edit mode
        document.getElementById('fee-form').setAttribute('data-edit-id', fee.studentId);
        document.getElementById('fee-form').setAttribute('data-edit-date', fee.paymentDate);
        
        // Show the form and hide the table
        document.getElementById('fees-content').style.display = 'none';
        document.getElementById('add-fee-form').style.display = 'block';
        
        // Populate student dropdown
        const studentSelect = document.getElementById('fee-student');
        studentSelect.innerHTML = '<option value="">Select Student</option>';
        smsData.students.forEach(student => {
            const option = document.createElement('option');
            option.value = student.id;
            option.textContent = `${student.name} (${student.class} ${student.section})`;
            studentSelect.appendChild(option);
        });
        
        // Set selected student
        studentSelect.value = fee.studentId;
    }

    function deleteFee(studentId, paymentDate) {
        if (confirm('Are you sure you want to delete this fee record?')) {
            smsData.fees = smsData.fees.filter(f => 
                !(f.studentId === studentId && f.paymentDate === paymentDate)
            );
            saveData();
            loadFeesTable();
            updateDashboardCounters();
        }
    }

    // Fee form handling
    document.getElementById('add-fee-btn').addEventListener('click', () => {
        document.getElementById('fees-content').style.display = 'none';
        document.getElementById('add-fee-form').style.display = 'block';
        document.getElementById('fee-form').reset();
        document.getElementById('fee-form').removeAttribute('data-edit-id');
        document.getElementById('fee-form').removeAttribute('data-edit-date');
        
        // Populate student dropdown
        const studentSelect = document.getElementById('fee-student');
        studentSelect.innerHTML = '<option value="">Select Student</option>';
        smsData.students.forEach(student => {
            const option = document.createElement('option');
            option.value = student.id;
            option.textContent = `${student.name} (${student.class} ${student.section})`;
            studentSelect.appendChild(option);
        });
    });

    document.getElementById('cancel-fee-btn').addEventListener('click', () => {
        document.getElementById('fees-content').style.display = 'block';
        document.getElementById('add-fee-form').style.display = 'none';
    });

    document.getElementById('fee-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isEdit = document.getElementById('fee-form').hasAttribute('data-edit-id');
        const studentId = document.getElementById('fee-student').value;
        const paymentDate = document.getElementById('fee-date').value;
        
        const feeAmount = parseFloat(document.getElementById('fee-amount').value);
        const paidAmount = parseFloat(document.getElementById('fee-paid').value);
        const dueAmount = feeAmount - paidAmount;
        const status = dueAmount <= 0 ? 'paid' : 'due';
        
        const fee = {
            studentId: studentId,
            studentName: smsData.students.find(s => s.id === studentId)?.name || 'Unknown',
            class: smsData.students.find(s => s.id === studentId)?.class || 'Unknown',
            feeAmount: feeAmount,
            paidAmount: paidAmount,
            dueAmount: dueAmount,
            paymentDate: paymentDate,
            status: status,
            description: document.getElementById('fee-description').value
        };
        
        if (isEdit) {
            // Update existing fee
            const oldId = document.getElementById('fee-form').getAttribute('data-edit-id');
            const oldDate = document.getElementById('fee-form').getAttribute('data-edit-date');
            
            const index = smsData.fees.findIndex(f => 
                f.studentId === oldId && f.paymentDate === oldDate
            );
            
            if (index !== -1) {
                smsData.fees[index] = fee;
            }
        } else {
            // Add new fee
            smsData.fees.push(fee);
        }
        
        saveData();
        loadFeesTable();
        updateDashboardCounters();
        
        // Return to table view
        document.getElementById('fees-content').style.display = 'block';
        document.getElementById('add-fee-form').style.display = 'none';
    });

    // Fee search and filter
    document.getElementById('fee-search').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredFees = smsData.fees.filter(f => 
            f.studentName.toLowerCase().includes(searchTerm) || 
            f.studentId.toLowerCase().includes(searchTerm)
        );
        
        const tbody = document.querySelector('#fees-table-body');
        tbody.innerHTML = '';
        
        filteredFees.forEach(fee => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${fee.studentId}</td>
                <td>${fee.studentName}</td>
                <td>${fee.class}</td>
                <td>$${fee.feeAmount.toFixed(2)}</td>
                <td>$${fee.paidAmount.toFixed(2)}</td>
                <td>$${fee.dueAmount.toFixed(2)}</td>
                <td>${fee.paymentDate}</td>
                <td><span class="status ${fee.status}">${fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}</span></td>
                <td>
                    <button class="btn btn-sm btn-secondary view-fee" data-id="${fee.studentId}" data-date="${fee.paymentDate}">View</button>
                    <button class="btn btn-sm btn-primary edit-fee" data-id="${fee.studentId}" data-date="${fee.paymentDate}">Edit</button>
                    <button class="btn btn-sm btn-danger delete-fee" data-id="${fee.studentId}" data-date="${fee.paymentDate}">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        addFeeEventListeners();
    });

    document.getElementById('fee-status-filter').addEventListener('change', (e) => {
        loadFeesTable(e.target.value);
    });

    // Calendar Panel
    function initCalendar() {
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        
        renderCalendar(currentMonth, currentYear);
        
        // Set up navigation
        document.getElementById('prev-period').addEventListener('click', () => {
            const view = document.getElementById('calendar-view').value;
            if (view === 'month') {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                renderCalendar(currentMonth, currentYear);
            }
            // Similar logic for week and day views would go here
        });
        
        document.getElementById('next-period').addEventListener('click', () => {
            const view = document.getElementById('calendar-view').value;
            if (view === 'month') {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                renderCalendar(currentMonth, currentYear);
            }
            // Similar logic for week and day views would go here
        });
        
        document.getElementById('calendar-view').addEventListener('change', (e) => {
            // In a complete system, this would switch between month/week/day views
            renderCalendar(currentMonth, currentYear);
        });
    }

    function renderCalendar(month, year) {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                          'July', 'August', 'September', 'October', 'November', 'December'];
        
        document.getElementById('calendar-period').textContent = `${monthNames[month]} ${year}`;
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        const startingDay = firstDay.getDay(); // 0-6 (Sun-Sat)
        
        // Clear previous calendar
        const calendarGrid = document.getElementById('calendar-grid');
        calendarGrid.innerHTML = '';
        
        // Add day headers
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayNames.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyCell);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';
            
            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = day;
            dayCell.appendChild(dayNumber);
            
            // Add events for this day
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const dayEvents = smsData.events.filter(event => {
                const eventDate = event.start.split('T')[0];
                return eventDate === dateStr;
            });
            
            dayEvents.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'calendar-event';
                eventElement.textContent = event.title;
                eventElement.setAttribute('data-event-id', event.id);
                dayCell.appendChild(eventElement);
            });
            
            calendarGrid.appendChild(dayCell);
        }
    }

    // Event form handling
    document.getElementById('add-event-btn').addEventListener('click', () => {
        document.getElementById('add-event-form').style.display = 'block';
        document.getElementById('event-form').reset();
        document.getElementById('event-form').removeAttribute('data-edit-id');
    });

    document.getElementById('cancel-event-btn').addEventListener('click', () => {
        document.getElementById('add-event-form').style.display = 'none';
    });

    document.getElementById('event-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isEdit = document.getElementById('event-form').hasAttribute('data-edit-id');
        const eventId = isEdit 
            ? document.getElementById('event-form').getAttribute('data-edit-id')
            : 'EVT' + (1000 + smsData.events.length + 1);
        
        // Get selected classes
        const classSelect = document.getElementById('event-classes');
        const selectedClasses = Array.from(classSelect.selectedOptions).map(option => option.value);
        
        const event = {
            id: eventId,
            title: document.getElementById('event-title').value,
            type: document.getElementById('event-type').value,
            start: document.getElementById('event-start').value,
            end: document.getElementById('event-end').value,
            description: document.getElementById('event-description').value,
            classes: selectedClasses.length > 0 ? selectedClasses : ['All']
        };
        
        if (isEdit) {
            // Update existing event
            const index = smsData.events.findIndex(e => e.id === eventId);
            if (index !== -1) {
                smsData.events[index] = event;
            }
        } else {
            // Add new event
            smsData.events.push(event);
        }
        
        saveData();
        initCalendar(); // Refresh calendar
        
        // Hide the form
        document.getElementById('add-event-form').style.display = 'none';
    });

    // Reports Panel
    document.querySelectorAll('.report-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const reportType = card.getAttribute('data-report');
            showReportParameters(reportType);
        });
    });

    function showReportParameters(reportType) {
        document.querySelector('.report -types').style.display = 'none';
        document.querySelector('.report-parameters').style.display = 'block';
        document.querySelector('.report-output').style.display = 'none';
        
        const reportTitle = {
            'student-performance': 'Student Performance Report',
            'attendance': 'Attendance Report',
            'fee-collection': 'Fee Collection Report',
            'teacher-activity': 'Teacher Activity Report'
        }[reportType];
        
        document.getElementById('report-title').textContent = reportTitle;
        
        const reportFields = document.getElementById('report-fields');
        reportFields.innerHTML = '';
        
        // Common fields for all reports
        const classGroup = document.createElement('div');
        classGroup.className = 'form-group';
        classGroup.innerHTML = `
            <label for="report-class">Class</label>
            <select id="report-class">
                <option value="">All Classes</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                <option value="Grade 4">Grade 4</option>
                <option value="Grade 5">Grade 5</option>
            </select>
        `;
        reportFields.appendChild(classGroup);
        
        const dateGroup = document.createElement('div');
        dateGroup.className = 'form-row';
        dateGroup.innerHTML = `
            <div class="form-group">
                <label for="report-start-date">Start Date</label>
                <input type="date" id="report-start-date">
            </div>
            <div class="form-group">
                <label for="report-end-date">End Date</label>
                <input type="date" id="report-end-date">
            </div>
        `;
        reportFields.appendChild(dateGroup);
        
        // Report-specific fields
        if (reportType === 'student-performance') {
            const examGroup = document.createElement('div');
            examGroup.className = 'form-group';
            examGroup.innerHTML = `
                <label for="report-exam">Exam</label>
                <select id="report-exam">
                    <option value="">All Exams</option>
                    <option value="Mid-Term">Mid-Term Exams</option>
                    <option value="Final">Final Exams</option>
                </select>
            `;
            reportFields.appendChild(examGroup);
        }
        
        // Set up form submission
        document.getElementById('report-form').onsubmit = (e) => {
            e.preventDefault();
            generateReport(reportType);
        };
    }

    function generateReport(reportType) {
        document.querySelector('.report-parameters').style.display = 'none';
        document.querySelector('.report-output').style.display = 'block';
        
        const reportTitle = {
            'student-performance': 'Student Performance Report',
            'attendance': 'Attendance Report',
            'fee-collection': 'Fee Collection Report',
            'teacher-activity': 'Teacher Activity Report'
        }[reportType];
        
        document.getElementById('generated-report-title').textContent = reportTitle;
        
        // In a real system, this would generate actual report data
        // For demo, we'll show a placeholder
        document.getElementById('report-results').innerHTML = `
            <p>This would display the generated ${reportTitle} based on selected parameters.</p>
            <p>In a complete system, this would show tables, charts, and statistics.</p>
        `;
    }

    document.getElementById('cancel-report-btn').addEventListener('click', () => {
        document.querySelector('.report-types').style.display = 'grid';
        document.querySelector('.report-parameters').style.display = 'none';
        document.querySelector('.report-output').style.display = 'none';
    });

    // Settings Panel
    const settingsTabs = document.querySelectorAll('.settings-tabs .tab');
    const settingsPanes = document.querySelectorAll('.settings-tab-content .tab-pane');

    settingsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            
            // Update active tab
            settingsTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding pane
            settingsPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === `${tabId}-settings` || pane.id === `${tabId}-management`) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // Modal close button
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('view-modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('view-modal')) {
            document.getElementById('view-modal').style.display = 'none';
        }
    });

    // Save data to localStorage
    function saveData() {
        localStorage.setItem('smsData', JSON.stringify(smsData));
    }

    // Initialize the dashboard
    updateDashboardCounters();
    initAttendanceChart();
    loadRecentStudents();
});