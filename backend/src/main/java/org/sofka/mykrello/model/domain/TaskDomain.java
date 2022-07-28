package org.sofka.mykrello.model.domain;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDateTime;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@Entity
@Table(name = "krl_task")
//@JsonIgnoreProperties(value = {"task_column","log_task_id"}, allowGetters = true)
@JsonIgnoreProperties(value = {"task_column"}, allowGetters = true)
public class TaskDomain implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tsk_id", nullable = false)
    private Integer id;

    @ManyToOne(optional = false, fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JsonBackReference("task_column")
    @JoinColumn(name = "clm_id_column", referencedColumnName = "clm_id", nullable = false)
    private ColumnDomain column;


    @Column(name = "brd_id_board", nullable = false)
    private Integer id_board;

    @Column(name = "tsk_name", nullable = false)
    private String name;

    @Column(name = "tsk_description", nullable = false)
    private String tsk_description;

    @Column(name = "tsk_delivery_date", nullable = false)
    private Instant delivery_date;

    @Column(name = "tsk_created_at", nullable = false)
    private Instant created;

    @Column(name = "tsk_updated_at", nullable = false)
    private Instant updated;


}